<template>
  <div>
    <button @click="alertShow=true">alert</button>
    <button @click="showAlert">通过插件方式调用</button>
    <Alert @on-open="open" @on-close="close" v-model="alertShow" title="操作提示" content="allala" />
  </div>
</template>

<script>
import Alert from '../components/dialog/alert.vue'
export default {
  name: 'DialogTest',
  components: { Alert },
  created () {
    console.log('created')
  },
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
