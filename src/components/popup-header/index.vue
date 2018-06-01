<template>
  <div class="t-popup-header">
    <slot name="left-text">
      <div class="header-left">{{leftText}}</div>
    </slot>
    <slot name="title">
      <div class="header-title">{{title}}</div>
    </slot>
    <slot name="right-text">
      <div class="header-right">{{rightText}}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'PopupHeader',
  props: {
    leftText: {
      type: String
    },
    title: {
      type: String,
    },
    rightText: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.t-popup-header {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #edf0f5;
  justify-content: space-between;
  font-size: 28px;
  .header-title {
    flex: 1;
    text-align: center;
    color: #333;
    font-weight: bold;
  }
  .left-text {
    color: #666;
  }
  .right-text {
    color: #0cc071;
  }
}
</style>
