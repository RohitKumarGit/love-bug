<template>
    <div>
    <b-form-select v-model="selected" class="mb-3" v-show="selected===null">
      <b-form-select-option :value="null">Please select an option</b-form-select-option>
      <b-form-select-option value="a">Check cycle in a graph</b-form-select-option>
      <b-form-select-option value="b">0/1 Knapsack</b-form-select-option>
    </b-form-select>
   <basicapi v-show="selected==='a'"/>
  </div>
</template>

<script>
import basicapi from './basicapi.vue';
export default({
    
    data(){
        return {
        selected: null
      }
    },
    components:{
        basicapi
      }
})
</script>
<style scoped lang="scss">

</style>
