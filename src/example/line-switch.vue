<template>
  <div style="background-color:#fff;">
    <LineSwitch title="这是标题" v-model="model"></LineSwitch>
  </div>
</template>

<script>
import LineSwitch from '../components/line-switch/index.vue'
export default {
  name: 'lineSwitchTest',
  components: { LineSwitch },
  data () {
    return {
      model: false,
    }
  }
}
</script>

<style>
</style>
