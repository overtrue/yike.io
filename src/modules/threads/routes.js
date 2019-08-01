export default [
  {
    path: 'threads/create',
    name: 'threads.create',
    component: () => import('./form').default
  },
  {
    path: 'threads/:id/edit',
    name: 'threads.edit',
    component: () => import('./form').default
  },
  {
    path: 'threads/:id',
    name: 'threads.show',
    component: () => import('./show').default
  }
]
