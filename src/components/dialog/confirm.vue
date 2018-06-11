<template>
  <div class="t-alert">
    <TDialog :closeOnClikMask="false" v-model="showValue">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div class="weui-dialog__bd">{{content}}</div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" @click="cancel" class="weui-dialog__btn weui-dialog__btn_default">{{cancelText}}</a>
        <a href="javascript:;" @click="confirm" class="weui-dialog__btn weui-dialog__btn_primary">{{confirmText}}</a>
      </div>
    </TDialog>
  </div>
</template>
<script>
import TDialog from './dialog.vue'
export default {
  components: { TDialog },
  computed: {
    showValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('change', val)
      }
    }
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
    },
    value: {
      type: Boolean,
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    close () {
      this.$emit('change', false)
    },
    confirm () {
      this.$emit('onConfirm')
      this.close()
    },
    cancel () {
      this.$emit('onCancel')
      this.close()
    }
  },
  watch: {
    value: {
      handler (val) {
        if (val) {
          return void this.$emit('onOpen')
        }
        this.$emit('onClose')
      },
    }
  }
}
</script>

<style>
</style>
