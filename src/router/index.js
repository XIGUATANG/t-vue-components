import Vue from 'vue'
import VueRouter from 'vue-router'
const PopupTest = () => import('../example/popupradio.vue')
const AlertTest = () => import('../example/alert.vue')

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      redirect: '/popuptest'
    },
    {
      path: '/popuptest',
      name: 'popuptest',
      component: PopupTest
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: AlertTest
    }
  ]
})
