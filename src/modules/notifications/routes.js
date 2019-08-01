export default [
  {
    path: 'notifications',
    name: 'notifications.show',
    component: () => import('./show').default,
    meta: {
      requiresAuth: true
    }
  }
]
