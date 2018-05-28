export default [{
  path: '/users/:id',
  name: 'users.show',
  meta: {
    container: false
  },
  component: () => import('./show')
}, {
  path: '/user/profile',
  name: 'user.profile',
  component: () => import('./profile')
}]
