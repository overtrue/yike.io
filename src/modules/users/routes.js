export default [{
  path: '/users/:id',
  component: () => import('./show'),
  children: [{
    path: '/',
    name: 'users.show',
    meta: {
      container: false
    },
    component: () => import('./center/dynamic')
  }, {
    path: 'followers',
    name: 'users.followers',
    meta: {
      container: false
    },
    component: () => import('./center/followers')
  }, {
    path: 'following',
    name: 'users.following',
    meta: {
      container: false
    },
    component: () => import('./center/following')
  }]
}, {
  path: 'notifications',
  name: 'user.notification',
  component: () => import('./notification')
}, {
  path: '/user',
  component: () => import('./profile'),
  children: [{
    path: 'profile',
    name: 'user.profile',
    component: () => import('./profile/basic')
  }, {
    path: 'account',
    name: 'user.account',
    component: () => import('./profile/account')
  }, {
    path: 'notification',
    name: 'user.notification-setting',
    component: () => import('./profile/notification')
  }, {
    path: 'bindings',
    name: 'user.bindings',
    component: () => import('./profile/bindings')
  }, {
    path: 'blacklist',
    name: 'user.blacklist',
    component: () => import('./profile/blacklist')
  }]
}]
