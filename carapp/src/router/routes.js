
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Main/Home.vue') },
      { path: '/ecom', component: () => import('pages/Ecom/Ecommerce.vue') },
      { path: '/map', component: () => import('pages/Main/Mapping.vue') },
      { path: '/sched', component: () => import('pages/Main/Scheduling.vue') },
      { path: '/track', component: () => import('pages/Main/Tracking.vue') },
      { path: '/mess', component: () => import('pages/Main/Messaging.vue') },
      { path: '/prof', component: () => import('pages/Main/my_profile.vue') },
      { path: '/details', component: () => import('pages/Main/details.vue') }


    ]
  },
  {
    path: '/layout',
    component: () => import('layouts/Layout.vue'),
  },
  {
    path:'/log',
    component: () => import('layouts/Login/Login.vue'),
  },
  {
    path:'/for',
    component: () => import('layouts/Login/Forgot.vue'),
  },
  {
    path:'/reg',
    component: () => import('layouts/Login/Register.vue')
  },
  {
    path:'/user',
    component: () => import('layouts/Userside.vue')
  },


]

export default routes
