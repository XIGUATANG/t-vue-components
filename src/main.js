import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './style/weui.css'
Vue.config.productionTip = false
import FastClick from 'fastclick'
import AlertPlugin from './components/dialog/alert.js'
import ConfirmPlugin from './components/dialog/Confirm.js'
import './style/common.scss'

Vue.prototype.$Alert = AlertPlugin
Vue.prototype.$Confirm = ConfirmPlugin


FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
