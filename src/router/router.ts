import { PAGES } from '@/router/pages';

export default [
  {
    path: '/:userId',
    name: PAGES.USER,
    component: () => import('@/components/pages/UserView.vue'),
    meta: { title: 'TOP', saveScroll: false },
    props: true,
  },
  {
    path: '/pg',
    name: PAGES.PLAYGROUND,
    component: () => import('@/components/pages/PlaygroundView.vue'),
    meta: { title: 'PLAYGROUND', saveScroll: false },
    props: true,
  },
];
