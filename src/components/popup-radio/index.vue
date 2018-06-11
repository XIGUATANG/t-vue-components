<template>
  <div class="test">
    <Cell @click.native="popupShow=true" :value="label" :placeholder="placeholder" :title="title" isShowArrow></Cell>
    <Popup v-model="popupShow">
      <PopupHeader :title="popTitle"></PopupHeader>
      <Radio v-model="model" :options="options" @select="popupShow=false"></Radio>
    </Popup>
  </div>
</template>

<script>
import PopupHeader from '../popup-header/index.vue'
import Radio from '../radio/index.vue'
import Popup from '../popup/index.vue'
import Cell from '../cell/index.vue'
export default {
  name: 'PopupRadio',
  data () {
    return {
      popupShow: false
    }
  },
  components: { Popup, PopupHeader, Radio, Cell },
  watch: {

  },
  computed: {
    label () {
      const option = this.options.find(item => item.value === this.value)
      if (option) {
        if (typeof option === 'string') {
          return option
        }
        return option.label || ''
      }
      return ''
    },
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  props: {
    popTitle: String,
    title: String,
    value: {
      type: [String, Number],
    },
    options: {
      type: Array,
    },
    placeholder: String,
  }
}
</script>

<style lang="scss">
.t-cell {
  background-color: #fff;
}
</style>
