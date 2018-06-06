export default [{
  path: '/nodes',
  name: 'nodes.show',
  component: () => import('./show')
}, {
  path: '/nodes/:id',
  name: 'nodes.node',
  component: () => import('./node'),
  meta: {
    container: false
  }
}]
