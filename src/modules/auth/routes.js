export default [{
  path: 'auth/login',
  name: 'auth.login',
  component: () => import('./login')
}, {
  path: 'auth/register',
  name: 'auth.register',
  component: () => import('./register')
}]
