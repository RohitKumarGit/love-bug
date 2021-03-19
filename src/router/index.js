
import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from'../components/dashboard.vue'

Vue.use(VueRouter);

const routes=[
    {
       path:'/',
       component:Dashboard
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router
