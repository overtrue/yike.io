export default [
  {
    path: '/nodes',
    name: 'nodes.show',
    component: () => import('./list')
  },
  {
    path: '/nodes/:id',
    name: 'nodes.node',
    component: () => import('./show'),
    meta: {
      container: false
    }
  }
]
