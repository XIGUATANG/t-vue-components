<template>
  <Cell>
    <div slot="title" class="switch-title">{{title}}</div>
    <TSwitch v-model="swtichValue"></TSwitch>
  </Cell>
</template>

<script>
import Cell from '../cell/index.vue'
import TSwitch from '../switch/index.vue'
export default {
  nane: 'LineSwitch',
  components: { Cell, TSwitch },
  // data () {
  //   return {

  //   }
  // },
  props: {
    value: Boolean,
    title: String,
  },
  computed: {
    swtichValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
.switch-title {
  flex: 1;
  color: #666;
}
</style>
