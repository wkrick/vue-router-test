import { createRouter, createWebHashHistory } from 'vue-router'
import ContentView from '../views/ContentView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:mydata?',
      component: ContentView,
    },
  ],
})

export default router
