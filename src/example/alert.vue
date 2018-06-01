<template>
  <div>
    <button @click="alertShow=true">alert</button>
    <Alert v-model="alertShow" title="操作提示" content="allala" />
  </div>
</template>

<script>
import Alert from '../components/dialog/index.vue'
export default {
  name: 'DialogTest',
  components: { Alert },
  data () {
    return {
      alertShow: false,
    }
  }
}
</script>

<style>
</style>
