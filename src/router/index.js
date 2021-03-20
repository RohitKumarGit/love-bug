import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from'../components/dashboard.vue'
import basicapi from'../components/basicapi.vue'
import contests from'../components/contests.vue'
import matches from'../components/matches.vue'
import practice from'../components/practice.vue'
import IDE from'../components/ide.vue'
import help from'../components/help.vue'

Vue.use(VueRouter);

const routes=[
    {
       path:'/',
       component:Dashboard
    },
    {
        path:'/ide',
        component:IDE
    },
    {
        path:'/contests',
        component:contests
    },
    {
        path:'/running',
        component:basicapi
    },
    {
        path:'/matches',
        component:matches
    },
    {
        path:'/practice',
        component:practice
    },
    {
        path:'/help',
        component:help
    }

];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router
