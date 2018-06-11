<template>
  <div @click="changeStatus" class="t-switch" :class="{'active':value}">
    <div class="switch-box"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  methods: {
    changeStatus () {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    }
  }
}
</script>

<style lang="scss">
.t-switch {
  position: relative;
  width: 104px;
  height: 64px;
  border-radius: 32px;
  background-color: #fff;
  border: 1px solid #dfdfdf; /*no*/
  &.active {
    background-color: #0cc071;
    .switch-box {
      transform: translate(40px, -50%);
    }
  }
  .switch-box {
    position: absolute;
    left: 1px;
    width: 56px;
    height: 56px;
    background-color: #fff;
    border-radius: 28px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
