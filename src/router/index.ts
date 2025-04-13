import { createRouter, createWebHashHistory } from 'vue-router'
import InventoryUI from '@/components/InventoryUI.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:state?',
      component: InventoryUI,
    },
  ],
})

export default router
