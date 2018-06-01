<template>
  <div class="test">
    <button @click="popupShow=true">试一试</button>
    <Popup v-model="popupShow">
      <PopupHeader title="标题"></PopupHeader>
    </Popup>
  </div>
</template>

<script>
import PopupHeader from '../popup-header/index.vue'
import Popup from './index.vue'
export default {
  name: 'PopupTest',
  data () {
    return {
      popupShow: false,
    }
  },
  components: { Popup, PopupHeader }
}
</script>

<style>
</style>
