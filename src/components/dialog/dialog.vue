<template>
  <div class="dialog-wrappper">
    <div v-show="value" ref="mask" @click="maskClick" class="weui-mask"></div>
    <transition name="dialog">
      <div v-show="value" ref="dialog" class="weui-dialog">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import passiveSupported from '../../libs/passive_supported.js'
import preventBodyScroll from '../../mixins/preventbodyscroll'
export default {
  props: {
    value: Boolean,
    closeOnClikMask: {
      type: Boolean,
      default: true,
    }
  },
  mixins: [preventBodyScroll],
  methods: {
    maskClick () {
      console.log('maskClick')
      if (this.closeOnClikMask) {
        this.$emit('input', false)
      }
    },
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.mask.addEventListener('touchmove', function (event) {
        event.preventDefault()
        event.stopPropagation()
      }, passiveSupported ? { passive: false } : false)
      this.$refs.dialog.addEventListener('touchmove', function (event) {
        event.preventDefault()
        event.stopPropagation()
      }, passiveSupported ? { passive: false } : false)

    })
  },
  watch: {
    value (val) {
      if (val) {
        this.doOpen()
      } else { this.doClose() }
    }
  }
}
</script>

<style lang="scss">
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
</style>
