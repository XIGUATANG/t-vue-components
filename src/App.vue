<template>
  <div id="app">
    <router-link class="router-link" to="/popupradio">popupradio</router-link>
    <router-link class="router-link" to="/alert">alert</router-link>
    <router-link class="router-link" to="/confirm">confirm</router-link>
    <router-link class="router-link" to="/switch">switch</router-link>
    <router-link class="router-link" to="/lineswitch">lineSwitch</router-link>
    <router-link class="router-link" to="/tabchoose">tabChoose</router-link>
    <router-link class="router-link" to="/tab">Tab</router-link>
    <router-view class="router-view" :key="$route.fullPath"></router-view>
  
  </div>
</template>

<script>

export default {
  name: 'App',
 
  data () {
    return {
      
    }
  },
  methods: {
    it (n) {
      console.log(1)
      return n + ''
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body,
html {
  background-color: #fafafa;
  -webkit-overflow-scrolling: touch;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.router-link {
  display: inline-block;
  font-size: 28px;
  color: #0cc071;
  width: 200px;
  text-align: center;
}
button {
  display: block;
  height: 80px;
  width: 100%;
  color: #fff;
  font-size: 32px;
  background-color: #0cc071;
  margin-top: 20px;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  &:focus {
    outline: 0;
  }
}
.router-view {
  margin-top: 20px;
  background-color: #fff;
}
</style>
