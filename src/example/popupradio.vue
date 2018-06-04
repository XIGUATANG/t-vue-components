<template>
  <PopupRadio :options="options" title="选择吧" popTitle="选项标题" placeholder="请选择你的看法"></PopupRadio>
</template>

<script>
import PopupRadio from '../components/popup-radio/index.vue'
export default {
  name: 'PopRadioTest',
  components: { PopupRadio },
  data () {
    return {
      options: [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        }, {
          label: '我是最帅的',
          value: 'yes',
        }, {
          label: '你是最丑的',
          value: 'yeye',
        }, {
          label: '哈哈哈',
          value: 'hahah'
        }
      ]
    }
  }

}
</script>

<style>
</style>
