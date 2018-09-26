import Vue from 'vue'
import VueRouter from 'vue-router'
const PopupTest = () => import('../example/popupradio.vue')
const AlertTest = () => import('../example/alert.vue')
const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  base: '/',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      redirect: '/popupradio'
    },
    {
      path: '/popupradio',
      name: 'popupradio',
      component: PopupTest
    },
    {
      path: '/alert/:id',
      name: 'alert',
      component: AlertTest
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../example/confirm.vue')
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../example/switch.vue')
    },
    {
      path: '/lineswitch',
      name: 'lineSwitch',
      component: () => import('../example/line-switch.vue')
    },
    {
      path: '/tabchoose',
      name: 'tabChoose',
      component: () => import('../example/tab-choose.vue')
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('../example/Tab.vue')
    }
  ]
})
