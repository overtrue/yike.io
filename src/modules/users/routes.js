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
  meta: {
    container: false
  },
  component: () => import('./profile')
}]
