import { createRouter, createWebHashHistory } from 'vue-router'
import taskList from '@/components/task-list.vue'
import taskEdit from '@/views/task-edit.vue'
import taskDetails from '@/views/task-details.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'taskList',
      component: taskList
    },

    {
      path:'/task/:taskId',
      component:taskDetails,
    },
    {
      path:'/edit/:taskId',
      component:taskEdit,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
