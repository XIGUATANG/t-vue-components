<template>
  <div>
    <TSwitch v-model="switchValue" @on-change="change"></TSwitch>
  </div>
</template>

<script>
import TSwitch from '../components/switch/index.vue'
export default {
  components: { TSwitch },
  data () {
    return {
      switchValue: false,
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>

<style>
</style>
