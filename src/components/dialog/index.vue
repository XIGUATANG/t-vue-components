<template>
  <div class="t-alert">
    <TDialog v-model="showValue">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div class="weui-dialog__bd">{{content}}</div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" @click="close" class="weui-dialog__btn weui-dialog__btn_primary">{{buttonText}}</a>
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
        this.$emit('input', val)
      }
    }
  },
  model: {
    prop: 'value',
    event: 'input'
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
    buttonText: {
      type: String,
      default: '确定'
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    close () {
      debugger
      this.$emit('change', false)
    }
  }
}
</script>

<style>
</style>
