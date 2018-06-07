export default [{
  path: 'notifications',
  component: () => import('./show'),
  children: [{
    path: '/',
    name: 'notifications.all',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./panels/all')
  }, {
    path: 'mention',
    name: 'notifications.mention',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./panels/mention')
  }, {
    path: 'reply',
    name: 'notifications.reply',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./panels/reply')
  }, {
    path: 'follower',
    name: 'notifications.follower',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./panels/follower')
  }, {
    path: 'letter',
    name: 'notifications.letter',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./panels/letter')
  }]
}]
