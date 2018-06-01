<template>
  <div v-show="value" class="dialog-wrappper">
    <div @click="preventScoll" class="weui-mask"></div>
    <div class="weui-dialog">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    preventScoll () {
      event.preventDefault()
    }
  }
}
</script>

<style>
</style>
