<template>
  <div class="t-cell">
    <span class="cell-title">{{title}}</span>
    <span v-show="!value" class="cell-placeholder">{{placeholder}}</span>
    <slot>
      <span v-show="value" class="cell-value">{{value}}</span>
    </slot>
    <span v-if="isShowArrow" class="cell-arrow"></span>
  </div>
</template>

<script>
export default {
  name: 'TCell',
  props: {
    value: String,
    title: String,
    placeholder: String,
    isShowArrow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.t-cell {
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #e4e4e4;
  min-height: 88px;
  padding: 0 30px;
  font-size: 28px;
  &:first-child {
    border-top: none;
  }
  span {
    display: block;
  }
  .cell-title {
    width: 210px;
    color: #666;
  }
  .cell-placeholder {
    flex: 1;
    color: #999;
    padding-right: 30px;
  }
  .cell-value {
    flex: 1;
    color: #333;
    padding-right: 30px;
  }
  .cell-arrow {
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: url('../../assets/icon-more.svg') no-repeat;
    background-size: 100%;
  }
}
</style>
