export default [{
  path: 'threads/create',
  name: 'threads.create',
  component: () => import('./create')
}, {
  path: 'threads/:id',
  name: 'threads.show',
  component: () => import('./show')
}]
