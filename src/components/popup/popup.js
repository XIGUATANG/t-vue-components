import passiveSupported from '../../libs/passive_supported'
import { error } from 'util'

export default class popupDialog {
  constructor(option) {
    this.uuid = Math.random()
      .toString(36)
      .substring(3, 8)
    if (Object.prototype.toString.call(option) === '[object Object]') {
      this.params = {
        hideOnBlur: option.hideOnBlur,
        onOpen: option.onOpen || function() {},
        onClose: option.onClose || function() {},
        showMask: option.showMask
      }
    }
    if (document.querySelectorAll('popup-mask').length <= 0) {
      const divMask = document.createElement('a')
      divMask.className = 'popup-mask'
      divMask.dataset.uuid = ''
      divMask.href = 'javascript:void(0)'
      document.body.appendChild(divMask)
    }
    this.mask = document.querySelector('.popup-mask')
    if (!option.container) throw error('err: constructor must has a container')
    this.container = option.container
    this.container.className += ` popup-dialog popup-dialog-${this.uuid}`
    if (!this.params.hideOnBlur) {
      this.container.className += ' popup-mask-disabled'
    }
    this.mask.dataset.uuid += `,${this.uuid}`
    this._bindEvents()
    option = null
    this.containerHandler = () => {
      this.mask &&
        !/show/.test(this.mask.className) &&
        setTimeout(() => {
          !/show/.test(this.mask.className) && (this.mask.style['zIndex'] = -1)
        }, 200)
    }
    this.container && this.container.addEventListener('webkitTransitionEnd', this.containerHandler)
    this.container && this.container.addEventListener('transitionend', this.containerHandler)
  }
  _bindEvents() {
    this.mask.addEventListener(
      'touchmove',
      e => {
        e.preventDefault()
        e.stopPropagation()
      },
      passiveSupported ? { passive: false } : false
    )
    if (this.params.hideOnBlur) {
      this.mask.addEventListener('click', this.onClickMask.bind(this), false)
    }
  }
  onClickMask() {
    this.params.onClose()
  }
  show() {
    if (this.params.showMask) {
      this.mask.classList.add('popup-show')
      this.mask.style['zIndex'] = 500
    }
    this.container.classList.add('popup-show')
    this.params.onOpen && this.params.onOpen(this)
  }
  hide(shouldCallback = true) {
    this.container.classList.remove('popup-show')
    if (!document.querySelector('.popup-dialog.popup-show')) {
      this.mask.classList.remove('popup-show')
      setTimeout(() => {
        this.mask && !/show/.test(this.mask.className) && (this.mask.style['zIndex'] = -1)
      }, 400)
    }
    shouldCallback === false && this.params.onClose && this.params.hideOnBlur && this.params.onClose(this)
    this.isShow = false
  }
  destroy() {
    this.mask.dataset.uuid = this.mask.dataset.uuid.replace(new RegExp(`,${this.uuid}`, 'g'), '')
    if (!this.mask.dataset.uuid) {
      this.mask.removeEventListener('click', this.onClickMask.bind(this), false)
      this.mask && this.mask.parentNode && this.mask.parentNode.removeChild(this.mask)
    } else {
      this.hide()
    }
    this.container.removeEventListener('webkitTransitionEnd', this.containerHandler)
    this.container.removeEventListener('transitionend', this.containerHandler)
  }
}
