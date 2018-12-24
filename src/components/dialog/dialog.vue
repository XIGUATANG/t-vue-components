<template>
  <div
    v-transfer-dom
    class="dialog-wrappper"
  >
    <Transition name="t-mask">
      <div
        v-show="value"
        ref="mask"
        class="weui-mask"
        @click="maskClick"
      />
    </Transition>
    <Transition name="t-dialog">
      <div
        v-show="value"
        ref="dialog"
        class="weui-dialog"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
<script>
import passiveSupported from '../../libs/passive_supported.js'
import preventBodyScroll from '../../mixins/preventbodyscroll'
import TransferDom from '../../directives/transfer-dom'
export default {
  name: 'Dialog',
  directives: { TransferDom },
  mixins: [preventBodyScroll],
  props: {
    value: Boolean,
    closeOnClikMask: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value (val) {
      if (val) {
        this.addModalClassName()
        this.$emit('on-open')
      } else {
        this.removeModalClassName()
        this.$emit('on-close')
      }
    }
  },
  methods: {
    maskClick () {
      console.log('maskClick')
      if (this.closeOnClikMask) {
        this.$emit('input', false)
      }
    }
  },
  mounted () { }
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
