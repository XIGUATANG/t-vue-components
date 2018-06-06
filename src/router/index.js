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
      path: '/alert',
      name: 'alert',
      component: AlertTest
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../example/confirm.vue')
    }
  ]
})
