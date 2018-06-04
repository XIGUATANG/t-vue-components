<template>
  <div class="test">
    <Cell @click.native="popupShow=true" :value="model" :placeholder="placeholder" :title="title" isShowArrow></Cell>
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
  name: 'PopupTest',
  data () {
    return {
      popupShow: false,
      model: '',
    }
  },
  components: { Popup, PopupHeader, Radio, Cell },
  props: {
    popTitle: String,
    title: String,
    value: {
      type: [String, Number],
    },
    options: {
      type: Array,
      required: true,
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
