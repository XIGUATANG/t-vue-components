<template>

  <div v-transfer-dom class="dialog-wrappper">
    <transition name="t-mask">
      <div v-show="value" ref="mask" @click="maskClick" class="weui-mask"></div>
    </transition>
    <transition name="t-dialog">
      <div v-show="value" ref="dialog" class="weui-dialog">
        <slot></slot>
      </div>
    </transition>
  </div>

</template>
<script>
import passiveSupported from '../../libs/passive_supported.js'
import preventBodyScroll from '../../mixins/preventbodyscroll'
import TransferDom from '../../directives/transfer-dom'
export default {
  name: 'Dialog',
  directives: { TransferDom },
  props: {
    value: Boolean,
    closeOnClikMask: {
      type: Boolean,
      default: true
    }
  },
  mixins: [preventBodyScroll],
  methods: {
    maskClick() {
      console.log('maskClick')
      if (this.closeOnClikMask) {
        this.$emit('input', false)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.mask.addEventListener(
        'touchmove',
        function(event) {
          event.preventDefault()
          event.stopPropagation()
        },
        passiveSupported ? { passive: false } : false
      )
      this.$refs.dialog.addEventListener(
        'touchmove',
        function(event) {
          event.preventDefault()
          event.stopPropagation()
        },
        passiveSupported ? { passive: false } : false
      )
    })
  },
  watch: {
    value(val) {
      if (val) {
        this.doOpen()
      } else {
        this.doClose()
      }
    }
  }
}
</script>

<style lang="scss">
.dialog-wrappper {
  // position: fixed;
  width: 100%;
}
.dialog-enter {
  opacity: 0;
  -webkit-transform: translate3d(-50%, -50%, 0) scale(0.7);
  transform: translate3d(-50%, -50%, 0) scale(0.7);
}
.dialog-leave-active {
  opacity: 0;
  -webkit-transform: translate3d(-50%, -50%, 0) scale(0.9);
  transform: translate3d(-50%, -50%, 0) scale(0.9);
}

.t-mask-enter,
.t-mask-leave-active {
  opacity: 0;
}

.t-mask-enter-active,
.t-mask-leave-active {
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.t-dialog-enter-active {
  -webkit-animation: t-dialog-in 0.5s;
  animation: t-dialog-in 0.5s;
}

.t-dialog-leave-active {
  -webkit-animation: t-dialog-out 0.3s;
  animation: t-dialog-out 0.3s;
}

@keyframes t-dialog-in {
  0% {
    -webkit-transform: scale(1.185);
    transform: scale(1.185);
    opacity: 0;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes t-dialog-out {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  to {
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
    opacity: 0;
  }
}
</style>
