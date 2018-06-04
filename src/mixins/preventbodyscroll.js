let scrollBarWidth
const getScrollBarWidth = () => {
  if (scrollBarWidth !== undefined) return scrollBarWidth

  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode.removeChild(outer)

  return widthNoScroll - widthWithScroll
}

export default {
  data() {
    return {
      bodyOverflow: null,
      bodyPaddingRight: null
    }
  },
  methods: {
    doOpen() {
      if (!this.bodyOverflow) {
        this.bodyPaddingRight = document.body.style.paddingRight
        this.bodyOverflow = document.body.style.overflow
      }
      scrollBarWidth = getScrollBarWidth()
      let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight
      if (scrollBarWidth > 0 && bodyHasOverflow) {
        document.body.style.paddingRight = scrollBarWidth + 'px'
      }
      document.body.style.overflow = 'hidden'
      if (getComputedStyle(this.$el).position === 'static') {
        this.$el.style.position = 'absolute'
      }
    },
    doClose() {
      setTimeout(() => {
        if (this.modal && this.bodyOverflow !== 'hidden') {
          document.body.style.overflow = this.bodyOverflow
          document.body.style.paddingRight = this.bodyPaddingRight
        }
        this.bodyOverflow = null
        this.bodyPaddingRight = null
      }, 200)
    }
  }
}
