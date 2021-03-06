import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '../views/ebook/index.vue'
import Ebookreader from '../components/ebook/EbookReader.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: Ebook,
    children: [
      {
        path: ':filename',
        component: Ebookreader
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
