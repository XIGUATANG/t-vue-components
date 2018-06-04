import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './style/weui.css'
Vue.config.productionTip = false
import FastClick from 'fastclick'
import AlertPlugin from './components/dialog'

Vue.prototype.$Alert = AlertPlugin
//在created或monted生命周期中将FastClick绑定到body
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
