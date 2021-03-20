<template>
    <div class="login-container">
      <div class="login-div">
          <img src="../assets/login.jpg" alt="" class="my-photo">
          <b-button variant="primary" @click="login">LOGIN</b-button>
           <!-- <a href="#" class="testbutton"><i class="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Sign-in with Google</a> -->
      </div>
     
    </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
export default({
  name:"login",
  methods: {
    async login(){
        var provider = new firebase.auth.GoogleAuthProvider()
        const {user} =await  firebase.auth().signInWithPopup(provider)
        const {data} = await axios.post('/api/participants',{uid:user.uid,data:user})
        console.log(data)
        this.$store.commit("adduser",data.participant)
    }
  },
})
</script>

<style scoped lang="scss">
.login-container{
    height: 100vh;
    width:100vw;
    background-image: linear-gradient(
        to right bottom,
        rgba(#2ebf91, 0.5),
        rgba(#8360c3, 0.5)),
        url("https://wallpaperaccess.com/full/112826.jpg");
        background-position: center;
    background-size: cover;
}
.login-div{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    height:30rem;
    width: 30rem;
    background-color:white;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius:5px;
}
.testbutton {
    text-decoration: none;
  font-family: verdana;
  font-weight: bold;
  color: #000000 !important;
  font-size: 18px;
  text-shadow: 1px 1px 0px #7CACDE;
  box-shadow: 1px 1px 1px #BEE2F9;
  padding: 10px 25px;
  border-radius: 10px;
  border: 2px solid #A327A3;
  background: #63B8EE;
  background: linear-gradient(to top, #63B8EE, #468CCF);
}
.testbutton:hover {
  background: #468CCF;
  background: linear-gradient(to top, #468CCF, #63B8EE);
}
.my-photo{
    height: 23rem;
    width: 100%;
    border-radius: 5px;
    border:solid 1px black;
}
</style>