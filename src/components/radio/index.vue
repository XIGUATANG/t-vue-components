<template>
  <div class="t-radiolist">
    <div @click="select(item)" class="t-radio-cell" v-for="item in optionsComp" :key="item.value">
      <div class="cell-label">{{item.label}}</div>
      <div class="check-status">
        <template v-if="!item.disabled">
          <img v-show="item.value===value" src="../../assets/radio_on.png" alt="">
          <img v-show="item.value!==value" src="../../assets/radio_off.png" alt="">
        </template>
        <span v-else class="radio-disabled"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array
    },
    value: {
      type: [String, Number]
    }
  },
  model: {
    prop: 'value',
    event: 'change'
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
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('change', val)
      }
    }
  },
  methods: {
    select (item) {
      if (item.disabled) return
      this.$emit('change', item.value)
      this.$emit('select')
    }
  }
}
</script>

<style lang="scss">
.t-radio-cell {
  display: flex;
  padding: 0 30px;
  height: 88px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e4e4e4;
  font-size: 28px;
  color: #333;
  -webkit-tap-highlight-color: transparent;
  &:first-child {
    border-top: none;
  }
  .check-status {
    img {
      display: block;
      width: 30px;
      height: 30px;
    }
    .radio-disabled {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-color: #d9d9d9;
    }
  }
}
</style>
