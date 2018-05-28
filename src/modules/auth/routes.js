export default [{
  path: 'login',
  name: 'auth.login',
  component: () => import('./login')
}, {
  path: 'register',
  name: 'auth.register',
  component: () => import('./register')
}]
