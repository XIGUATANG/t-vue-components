<template>
  <div>
    <PopupRadio :options="options" v-model="radioValue" title="选择吧" popTitle="选项标题" placeholder="请选择你的看法"></PopupRadio>
    <li v-show="visible" v-for="item in  list" :key="item">
      <span v-once>{{bar}}</span>
    </li>
    <button @click="visible=!visible">1234</button>
  </div>

</template>

<script>
import PopupRadio from '../components/popup-radio/index.vue'
export default {
  name: 'PopRadioTest',
  components: { PopupRadio },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('before')
  },
  mounted () {
    console.log('mounted')
  },
  data () {
    return {
      visible: true,
      list: [1, 2, 3, 4, 5],
      radioValue: 'yeye',
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
  },
  computed: {
    bar () {
      console.log('computed')
      return '123'
    }
  },
  methods: {
    it (n) {
      console.log(1)
      return n + ''
    }
  }

}
</script>

<style>
</style>
