export default [
  {
    path: '/:username',
    component: () => import('./show'),
    children: [
      {
        path: '/',
        name: 'users.show',
        meta: {
          container: false
        },
        component: () => import('./tabs/activities')
      },
      {
        path: 'threads',
        name: 'users.threads',
        meta: {
          container: false
        },
        component: () => import('./tabs/threads')
      },
      {
        path: 'followers',
        name: 'users.followers',
        meta: {
          container: false
        },
        component: () => import('./tabs/followers')
      },
      {
        path: 'following',
        name: 'users.following',
        meta: {
          container: false
        },
        component: () => import('./tabs/following')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('./profile'),
    children: [
      {
        path: 'profile',
        name: 'user.profile',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/basic')
      },
      {
        path: 'account',
        name: 'user.account',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/account')
      },
      {
        path: 'extends',
        name: 'user.extends',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/extends')
      },
      {
        path: 'notification',
        name: 'user.notification-setting',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/notification')
      },
      {
        path: 'bindings',
        name: 'user.bindings',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/bindings')
      },
      {
        path: 'avatar',
        name: 'user.avatar',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/avatar')
      },
      {
        path: 'blacklist',
        name: 'user.blacklist',
        meta: {
          requiresAuth: true
        },
        component: () => import('./profile/blacklist')
      }
    ]
  }
]
