import { createRouter, createWebHashHistory } from 'vue-router'
import InventoryGUI from '@/components/InventoryUI.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:state?',
      component: InventoryGUI,
    },
  ],
})

export default router
