import { createRouter, createWebHashHistory } from 'vue-router'
import ContentView from '../views/ContentView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'content',
      component: ContentView,
    },
    {
      path: '/:mydata',
      name: 'content2',
      component: ContentView,
    },
  ],
})

export default router
