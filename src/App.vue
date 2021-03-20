<template>
  <div id="app">
    <sidebar/>
    <router-view></router-view>
  </div>
</template>
<script>
import sidebar from './components/Sidebar.vue';

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);


export default({
 components:{
   sidebar
 },
 created(){
   if(localStorage.getItem("user")===null)
   {
        Vue.axios.post('api/participants',{uid:'1233'})
        .then((resp)=>{
          console.log(resp.data);
            localStorage.setItem('user',resp.data.participants);
        });
   }
 }
})
</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
