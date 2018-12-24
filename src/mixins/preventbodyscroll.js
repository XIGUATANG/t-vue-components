import dom from '../libs/dom'

const BODY_CLASS_NAME = 't-modal-open'

export default {
  methods: {
    // some plugin may be imported before configPlugin, so we cannot get gloal config when component is created
    getLayout () {
      if (typeof window !== 'undefined') {
        if (window.VUX_CONFIG && window.VUX_CONFIG.$layout === 'VIEW_BOX') {
          return 'VIEW_BOX'
        }
      }
      return ''
    },
    addModalClassName () {
      if (typeof this.shouldPreventScroll === 'function' && this.shouldPreventScroll()) {
        return
      }
      dom.addClass(document.body, BODY_CLASS_NAME)
    },
    removeModalClassName () {
      dom.removeClass(document.body, BODY_CLASS_NAME)
    }
  },
  beforeDestroy () {
    this.removeModalClassName()
  },
  deactivated () {
    this.removeModalClassName()
  }
}
