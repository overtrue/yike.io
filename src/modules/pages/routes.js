export default [
  {
    path: 'pages/privacy',
    name: 'pages.privacy',
    component: () => import('./privacy')
  },
  {
    path: 'pages/404',
    name: 'pages.not-found',
    component: () => import('./not-found')
  }
]
