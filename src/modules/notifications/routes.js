export default [{
  path: 'notifications',
  component: () => import('./show'),
  children: [{
    path: '/',
    name: 'notifications.all',
    component: () => import('./classifications/all')
  }, {
    path: 'mention',
    name: 'notifications.mention',
    component: () => import('./classifications/mention')
  }, {
    path: 'reply',
    name: 'notifications.reply',
    component: () => import('./classifications/reply')
  }, {
    path: 'follower',
    name: 'notifications.follower',
    component: () => import('./classifications/follower')
  }, {
    path: 'letter',
    name: 'notifications.letter',
    component: () => import('./classifications/letter')
  }]
}]
