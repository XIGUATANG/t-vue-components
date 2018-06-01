<template>
  <div class="test">
    <button @click="popupShow=true">试一试</button>
    <Popup v-model="popupShow">
      <PopupHeader title="标题"></PopupHeader>
      <Radio v-model="model" @select="popupShow=false"></Radio>
    </Popup>
  </div>
</template>

<script>
import PopupHeader from '../popup-header/index.vue'
import Radio from '../radio/index.vue'
import Popup from '../popup/index.vue'
export default {
  name: 'PopupTest',
  data () {
    return {
      popupShow: false,
      model: '',
    }
  },
  components: { Popup, PopupHeader, Radio }
}
</script>

<style>
</style>
