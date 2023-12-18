
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
      { path: '/details', component: () => import('pages/Details/Details.vue') },
      { path: '/check', component: () => import('pages/Ecom/Checkout.vue') },
      { path: '/cart', component: () => import('pages/Ecom/AddtoCart.vue') },
      { path: '/det2', component: () => import('pages/Details/Details2.vue') },
      { path: '/det3', component: () => import('pages/Details/Details3.vue') },
      { path: '/det4', component: () => import('pages/Details/Details4.vue') },
      { path: '/det5', component: () => import('pages/Details/Details5.vue') },
      { path: '/det6', component: () => import('pages/Details/Details6.vue') },
      { path: '/det7', component: () => import('pages/Details/Details7.vue') },
      { path: '/det8', component: () => import('pages/Details/Details8.vue') },
      { path: '/det9', component: () => import('pages/Details/Details9.vue') },



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
    path:'/admin',
    component: () => import('layouts/Admin.vue'),
    children:[
      { path: '/charts', component: () => import('pages/Main/admin/Charts.vue') },
      { path: '/tables', component: () => import('pages/Main/admin/Tables.vue') },
      { path: '/ecomer', component: () => import('pages/Main/admin/Ecom.vue') },
      { path: '/contact', component: () => import('pages/Main/admin/Messaging.vue') },



    ],
  },


]

export default routes
