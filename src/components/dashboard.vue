<template>
<div class="dashboard-container">
    <b-container>
 <b-row>
        <b-col>
            <div class="card-container">
  <div class="overlay">
    <div class = "items"></div>
    <div class = "items head">
      <p>HEY MAYANK</p>
      <hr>
    </div>
    <div class = "items price">
      <p class="new">I am enough of an artist to draw freely upon my imagination.</p>
    </div>
    <div class="items cart">
      <i class="fa fa-compass"></i>
      <span>Explore Contests</span>
  </div>
</div>

            </div>
        </b-col>
        <b-col class="live-location">
            <h1 class="headings">LIVE LOCATION</h1>
            <p>EST. ADDRESS : {{printaddr}}</p>
           <GmapMap
  :center="{lat:this.coordinates.lat, lng:this.coordinates.lng}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 23rem; height: 10rem; margin-left:4.5rem;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
    style="border-radius:5px;"
  />
</GmapMap>

        </b-col>
    </b-row>
    </b-container>
    <div class="registered-contests">
    <h1 class="headings">RUNNING CONTESTS</h1>
    </div>
    
</div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);
export default({
   name:"dashboard",
   data(){
       return{
          coordinates:{
              lat:0,
              lng:0
          },
          printaddr:""
       }
   },
   created()
    {
       this.$getLocation({})
       .then(coordinates=>{
// Applied to Dogbert's answer:

this.coordinates=coordinates;
var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.coordinates.lat+","+this.coordinates.lng+"&key=AIzaSyAV2sha6Y8hlAOAVLcWNG4lwD7lajGonrg";
        console.log(a);
              Vue.axios.get(a).then((response) => {
  console.log(response.data.results[1].formatted_address);
  this.printaddr=response.data.results[1].formatted_address;

});
console.log(this.coordinates);
       })
       .catch(error=>alert(error));
    }

})
</script>

<style scoped lang="scss">
  
.about{
    color:white;
    height:18rem;
    width:10rem;
    background-color:white;
    margin:1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #76b852;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #8DC26F, #76b852);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #8DC26F, #76b852); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
font-family: "Verdana", "Courier New", monospace;
font-weight:bold;

}
.live-location{
    color:white;
    font-family: "Verdana", "Courier New", monospace;
    height:18rem;
    width:10rem;
    background-color:white;
    margin:1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background: #f2709c;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff9472, #f2709c);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff9472, #f2709c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.registered-contests{
    height:20rem;
    width:69.5rem;
    background-color:white;
    margin:1rem;
    border-radius: 5px;
    margin:1rem auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.dashboard-container{
    background-color:#ced2d8;
    height:93vh;
    width:100vw;
}
.headings{
    font-size:2rem;
}
.about-icon{
    font-size:4rem;
}
$bg: #FEF5DF;

body {
  background-color: $bg;
}

.card-container {
    margin-top:1.3rem;
    height:17.5rem;
    width: 100%;
//   position: absolute;
//   top:0; right: 0; left: 0; bottom: 0;
//   margin: auto;
  
  background: url("https://i.pinimg.com/originals/94/75/01/94750156ed5493aadcd2472197136cff.jpg");
  background-size: cover;
  cursor: pointer;
  
  -webkit-box-shadow: 0 0 5px #000;
        box-shadow: 0 0 5px #000;
  }

.overlay {
  width: 100%;
  height: 100%;
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  
  background: rgba(77, 77, 77, .5);
  color: $bg;
  opacity: 1;
  transition: all 0.5s;
  
  font-family: 'RobotoCondensed', sans-serif;
}


.items {
  padding-left: 20px;
  letter-spacing: 3px;
}

.head {
  font-size: 30px;
  line-height: 40px;
  
  transform: translateY(40px);
  transition: all 0.7s;
  hr {
    display: block;
    width: 0;
    
    border: none;
    border-bottom: solid 2px $bg;
    
    position: absolute;
    bottom: 0; left:20px;
    
    transition: all .5s;
  }
}

.price {
  font-size: 22px;
  font-weight: bold;  
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s;
  .old {
    text-decoration: line-through;
    color: lighten(rgb(77, 77, 77),40%);
  }
}

.cart {
  font-size: 12px;
  opacity: 0;
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
  transform: translateY(40px);
  transition: all 0.7s;
  i {
    font-size: 16px;
  }
  span {
    margin-left: 10px;
  }
}

.card-container:hover .overlay {
  opacity: 1;
  & .head {
    transform: translateY(0px);
  }
  
  & hr {
    width: 75px;
    transition-delay: 0.4s;
  }
  
  & .price {
    transform: translateY(0px);
    transition-delay: 0.3s;
    opacity: 1;
  }
  
  & .cart {
    transform: translateY(0px);
    transition-delay: 0.6s;
    opacity: 1;
  }
}
</style>
