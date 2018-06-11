<template>
  <div>
    <button @click="alertShow=true">confirm</button>
    <button @click="showAlert">通过插件方式调用</button>
    <Confirm @on-open="open" @on-close="close" @onConfirm="confirm" v-model="alertShow" title="操作提示" content="allala" confirmText="确定啦啦" cancelText="取消啦啦" />
  </div>
</template>

<script>
import Confirm from '../components/dialog/confirm.vue'
export default {
  name: 'DialogTest',
  components: { Confirm },
  data () {
    return {
      alertShow: false,
    }
  },
  methods: {
    open () {
      console.log('open')
    },
    close () {
      console.log('close')
    },
    confirm () {
      console.log('confirm')
    },
    cancel () {
      console.log('cancel')
    },
    showAlert () {
      this.$Confirm({
        title: '重要提示',
        content: '我和你是好朋友👌',
        cancelText: 'gun',
        confirmText: 'ququ',
        onConfirm: () => {
          this.confirm()
        },
        onCancel: () => {
          this.cancel()
        }
      })
    }
  }
}
</script>

<style>
</style>
