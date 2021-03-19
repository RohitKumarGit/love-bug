
import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from'../components/dashboard.vue'
import login from'../components/login.vue'
import ide from'../components/ide.vue'

Vue.use(VueRouter);

const routes=[
    {
       path:'/',
       component:Dashboard
    },
    {
        path:'/login',
        component:login
     },
     {
         path:'/ide',
         component:ide
      }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router
