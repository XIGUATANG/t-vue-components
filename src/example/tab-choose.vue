<template>
  <TabChoose title="类型选择" v-model="optionsValue" :options="options"></TabChoose>
</template>

<script>
import TabChoose from '../components/tab-choose/index.vue'
export default {
  components: { TabChoose },
  data () {
    return {
      optionsValue: 'valueA',
      options: [
        {
          label: '类型A',
          value: 'valueA',
        }, {
          label: '类型B',
          value: 'valueB',
        }, {
          label: '类型C',
          value: 'valueC',
        }
      ]
    }
  }
}
</script>

<style>
</style>
