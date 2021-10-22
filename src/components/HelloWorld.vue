<template>
import { response } from 'express';
  <!-- EXAMPLE  -->
  <div>
    Hello there, the angle from my nightmare!<br>
    {{ text.toUpperCase() }} <br>

      <!-- EXAMPLE 1 -->
    <div v-bind:name="myBind">Dynamic Binding</div>

  <!-- EXAMPLE 2 -->
    <span v-if="yes">
      Yes
    </span>

    <span v-else>
      No
    </span>

  <!-- EXAMPLE 3 -->
    <div>
      <ul>
        <li :key="color.id" v-for="(color, fff) in colors">
          Sl.{{ fff+1 }}  ||  {{ color.price }}
          </li>
      </ul>
    </div>

  <!-- EXAMPLE 4 -->
    <div>
      <label>Search: <input type="text" v-model="searchText"/></label>
      <h5>Results: {{results.count}}</h5>
      <ul>
        <li :key="result" v-for="result in results.results">
          {{ result.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

data(){
  return{
    text:'tis is all smalls',
    myBind:'this binding thingy',

    yes: false,
    no: false,
    maybe:0,
    colors:[
      { title: 'Boring Facts', price: 6.99, id: 2, genres: ['adult', 'non-fiction'] }, 
      { title: 'Overly Complex Story', price: 7.99, id: 3, genres: ['adult', 'science fiction', 'fiction'] },
    ],
    searchText: "",
    results:[],
    
  }
},

 methods:{
   search:function(){
     axios
      .get('https://swapi.co/api/starships/?search=${this.searchText}')
      .then(response => {
        this.results = response.data;
      });
   }
 },
 watch:{
   searchText: function(){
     this.search();
   }
 },
}
</script>