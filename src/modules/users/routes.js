export default [{
  path: '/users/:id',
  name: 'users.show',
  meta: {
    container: false
  },
  component: () => import('./show')
}]
