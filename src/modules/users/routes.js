export default [
  {
    path: '/:username',
    component: () => import('./show').default,
    children: [
      {
        path: '/',
        name: 'users.show',
        meta: {
          container: false
        },
        component: () => import('./tabs/activities').default
      },
      {
        path: 'threads',
        name: 'users.threads',
        meta: {
          container: false
        },
        component: () => import('./tabs/threads').default
      },
      {
        path: 'followers',
        name: 'users.followers',
        meta: {
          container: false
        },
        component: () => import('./tabs/followers').default
      },
      {
        path: 'following',
        name: 'users.following',
        meta: {
          container: false
        },
        component: () => import('./tabs/following').default
      }
    ]
  },
  {
    path: '/user',
    component: () => import('./profile').default,
    children: [
      {
        path: 'profile',
        name: 'user.profile',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/basic').default
      },
      {
        path: 'account',
        name: 'user.account',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/account').default
      },
      {
        path: 'extends',
        name: 'user.extends',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/extends').default
      },
      {
        path: 'notification',
        name: 'user.notification-setting',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/notification').default
      },
      {
        path: 'bindings',
        name: 'user.bindings',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/bindings').default
      },
      {
        path: 'avatar',
        name: 'user.avatar',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/avatar').default
      },
      {
        path: 'blacklist',
        name: 'user.blacklist',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/blacklist').default
      }
    ]
  }
]
