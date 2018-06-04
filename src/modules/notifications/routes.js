export default [{
  path: 'notifications',
  component: () => import('./show'),
  children: [{
    path: '/',
    name: 'notifications.all',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./classifications/all')
  }, {
    path: 'mention',
    name: 'notifications.mention',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./classifications/mention')
  }, {
    path: 'reply',
    name: 'notifications.reply',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./classifications/reply')
  }, {
    path: 'follower',
    name: 'notifications.follower',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./classifications/follower')
  }, {
    path: 'letter',
    name: 'notifications.letter',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./classifications/letter')
  }]
}]
