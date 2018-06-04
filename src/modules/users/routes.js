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
    path: 'threads',
    name: 'users.threads',
    meta: {
      container: false
    },
    component: () => import('./center/threads')
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
  path: '/user',
  component: () => import('./profile'),
  children: [{
    path: 'profile',
    name: 'user.profile',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./profile/basic')
  }, {
    path: 'account',
    name: 'user.account',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./profile/account')
  }, {
    path: 'notification',
    name: 'user.notification-setting',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./profile/notification')
  }, {
    path: 'bindings',
    name: 'user.bindings',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./profile/bindings')
  }, {
    path: 'blacklist',
    name: 'user.blacklist',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./profile/blacklist')
  }]
}]
