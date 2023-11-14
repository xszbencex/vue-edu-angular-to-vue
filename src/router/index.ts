import { LOGIN_PATH, LOGIN_ROUTE_NAME, STATUS_PATH, STATUS_ROUTE_NAME } from '@/constants/routes'
import { isNotAuthenticatedGuard } from '@/guards/is-not-authenticated.guard'
import { redirectToStatusGuard } from '@/guards/redirect-to-status.guard'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: LOGIN_PATH,
      name: LOGIN_ROUTE_NAME,
      component: () => import('../views/LoginView.vue'),
      beforeEnter: redirectToStatusGuard,
      meta: { title: 'Login page' }
    },
    {
      path: STATUS_PATH,
      name: STATUS_ROUTE_NAME,
      component: () => import('../views/ServiceStatusView.vue'),
      beforeEnter: isNotAuthenticatedGuard,
      meta: { title: 'Service status page' }
    },
    { path: '/:catchAll(.*)', component: () => import('../views/PageNotFoundView.vue') }
  ]
})

router.afterEach((to) => {
  document.title = `Vue3 workshop @ 2023${to.meta.title ? ' | ' + to.meta.title : ''}`
})

export default router
