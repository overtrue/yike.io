export default [{
  path: 'auth/login',
  name: 'auth.login',
  component: () => import('./login')
}, {
  path: 'auth/register',
  name: 'auth.register',
  component: () => import('./register')
}, {
  path: 'auth/oauth-redirect/:platform',
  name: 'auth.oauth_redirect',
  meta: {
    navbar: false,
    container: false,
  },
  component: () => import('./oauth')
},{
  path: 'auth/oauth-callback/:platform',
  name: 'auth.oauth_callback',
  meta: {
    navbar: false,
    container: false,
  },
  component: () => import('./oauth')
},]
