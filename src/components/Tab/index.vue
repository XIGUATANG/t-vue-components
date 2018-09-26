<template>
  <div class="t-tab">
    <div v-for="(item,index) in tabItems" :class="{active:index===activeIndex}" class="t-tab-item" @click="activeIndex=index" :key="item.value">{{item.label}}</div>
    <div :style="inkStyle" class="t-tab-ink-bar">
      <span class="t-tab-bar-inner"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      tabItems: [
        {
          label: 'tab1',
          vlaue: '1',
        }, {
          label: 'tab2',
          vlaue: '2',
        }, {
          label: 'tab3',
          vlaue: '3',
        }, {
          label: 'tab4',
          vlaue: '4',
        }
      ]
    }
  },
  computed: {
    inkStyle () {
      return {
        left: ((this.activeIndex / this.tabItems.length * 100) || 0) + '%',
        right: ((this.tabItems.length - this.activeIndex - 1) / this.tabItems.length) * 100 + '%'
      }
    }
  }
}
</script>

<style lang="scss">
.t-tab {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 88px;
  color: #666;
  font-size: 32px;
  font-weight: bold;
  .t-tab-item {
    flex: 1;
    text-align: center;
    height: 100%;
    line-height: 88px;
    &.active {
      color: rgb(12, 192, 113);
    }
  }
  .t-tab-ink-bar {
    position: absolute;
    height: 4px;
    bottom: 0;
    transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;
    .t-tab-bar-inner {
      display: block;
      margin: auto;
      height: 100%;
      width: 160px;
      background-color: rgb(12, 192, 113);
    }
  }
}
</style>
