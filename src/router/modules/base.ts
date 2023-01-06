export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView/index.vue'),
  },
];