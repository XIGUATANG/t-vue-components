<template>
  <Cell :title="title">
    <div>
      <div @click="input(item.value)" class="option" :class="{active:item.value===value}" v-for="(item,index) in optionsComp" :key="item.value">{{item.label}}</div>
    </div>
  </Cell>
</template>

<script>
import Cell from '../cell/index.vue'
export default {
  components: { Cell },
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    title: String,
    value: [String, Number]
  },
  computed: {
    optionsComp () {
      if (this.options.every(item => typeof item === 'string')) {
        return this.options.map(item => ({
          label: item,
          value: item
        }))
      }
      return this.options
    },
  },
  methods: {
    input (value) {
      if (value === this.value) return
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.option {
  display: inline-block;
  border: 1px solid #ccc;
  /*no*/
  height: 52px;
  margin-right: 12px;
  box-sizing: border-box;
  line-height: 52px;
  padding: 0 13px;
  text-align: center;
  border-radius: 4px;
  font-size: 24px;
  color: #666;
  &.active {
    border-color: #0cc071;
    color: #0cc071;
  }
}
</style>
