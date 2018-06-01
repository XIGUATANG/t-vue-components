<template>
  <transition name="popup-animate">
    <div v-show="visiable&&!initialShow" class="pop-dialog">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from './popup'
import Radio from '../radio/index.vue'
export default {
  components: { Radio },
  data () {
    return {
      initialShow: true,
      model: ''
    }
  },
  props: {
    value: {
      type: Boolean,
    },
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    visiable: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('change', val)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.popup = new Popup({
        showMask: this.showMask,
        container: this.$el,
        hideOnBlur: this.hideOnBlur,
        onOpen: () => {
          this.visiable = true
        },
        onClose: () => {
          this.visiable = false
        }
      })
      if (this.value) {
        this.popup.show()
      }
      this.initialShow = false
    })
  },
  watch: {
    visiable (val) {
      if (val) {
        this.popup && this.popup.show()
        this.$emit('on-show')
        if (!this.hasFirstShow) {
          this.$emit('on-first-show')
          this.hasFirstShow = true
        }
      } else {
        this.$emit('on-hide')
        this.show = false
        this.popup.hide(false)
      }
    }
  },
  beforeDestroy () {
    this.popup && this.popup.destroy()
  }
}
</script>

<style lang="scss">
.popup-mask {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: -1;
  -webkit-transition: opacity 400ms;
  transition: opacity 400ms;
}
.pop-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 501;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
  max-height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.popup-mask.popup-show {
  opacity: 1;
}

.popup-animate-enter,
.popup-animate-leave-active {
  transform: translate3d(0, 100%, 0);
}

// .popup-animate-left-enter, .vux-popup-animate-left-leave-active {
//   transform: translate3d(-100%, 0, 0);
// }

// .popup-animate-right-enter, .vux-popup-animate-right-leave-active {
//   transform: translate3d(100%, 0, 0);
// }

// .popup-animate-top-enter, .vux-popup-animate-top-leave-active {
//   transform: translate3d(0, -100%, 0);
// }
</style>
