export default [
  {
    path: '/nodes',
    name: 'nodes.show',
    component: () => import('./list').default
  },
  {
    path: '/nodes/:id',
    name: 'nodes.node',
    component: () => import('./show').default,
    meta: {
      container: false
    }
  }
]
