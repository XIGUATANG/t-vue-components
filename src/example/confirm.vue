<template>
  <div>
    <button @click="alertShow=true">confirm</button>
    <button @click="showAlert">通过插件方式调用</button>
    <Comfirm @on-open="open" @on-close="close" @onConfirm="confirm" v-model="alertShow" title="操作提示" content="allala" confirmText="确定啦啦" cancelText="取消啦啦" />
  </div>
</template>

<script>
import Comfirm from '../components/dialog/confirm.vue'
export default {
  name: 'DialogTest',
  components: { Comfirm },
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
      this.$Alert({
        title: '重要提示',
        content: '我跟你说，我最可爱不接受反驳',
        buttonText: '知道了'
      })
    }
  }
}
</script>

<style>
</style>
