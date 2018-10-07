export default [
  {
    path: 'threads/create',
    name: 'threads.create',
    component: () => import('./form')
  },
  {
    path: 'threads/:id/edit',
    name: 'threads.edit',
    component: () => import('./form')
  },
  {
    path: 'threads/:id',
    name: 'threads.show',
    component: () => import('./show')
  }
]
