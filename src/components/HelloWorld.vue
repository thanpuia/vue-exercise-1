<template>

  <!-- EXAMPLE  -->
  <div>
    Hello there, the angle from my nightmare!<br>
    {{ text.toUpperCase() }} <br>

  
       <h1>EXAMPLE 1</h1>
    <div v-bind:name="myBind">Dynamic Binding</div>


   <h1>EXAMPLE 2</h1>
    <span v-if="yes">
      Yes
    </span>

    <span v-else>
      No
    </span>
 
   <h1>EXAMPLE 3</h1>
    <div>
      <ul>
        <li :key="color.id" v-for="(color, fff) in colors">
          Sl.{{ fff+1 }}  ||  {{ color.price }}
          </li>
      </ul>
    </div>

  
   <h1>EXAMPLE 4 WATCHER</h1>
    <div>
      <label>Search: <input type="text" v-model="searchText"/></label>
      <h5>Results: {{results.count}}</h5>
      <ul>
        <li :key="result" v-for="result in results.results">
          {{ result.name }}
        </li>
      </ul>

    </div>

     
     <h1>EXAMPLE 5 EVENTS</h1>
    <div>
      <h1 v-on:click="show = !show">
        Toggle Baby
      </h1>
      <p v-show="show">
        Hide and show this msg by Toggle Baby
      </p>
    </div>

      
     <h1>EXAMPLE 6 METHODS</h1>
    <div>
      <button type="button" v-on:click="myToggle">
        My Toggle Baby
      </button>
      <p v-show="show2">
        Hide and show this msg by My Toggle Baby
      </p>
    </div>
      <h1>EXAMPLE 7 EVENT PROPAGATIONS SETUP</h1>
    <div>
      <!-- <div v-on:click="messages.push('Outer')"> <h4>Outer</h4></div>

      <div v-on:click="messages.push('Middle')"><h4>Middle</h4></div>

      <div v-on:click="messages.push('Inner One')"> <h4>Inner One</h4> </div>

      <div v-on:click="messages.push('Inner B')"> <h4>Inner B</h4> </div>  -->
         
      <div v-on:click="messages.push('Milk')">Milk</div>
      <div v-on:click="messages.push('Sugar')">Sugar</div>

        <p> Last clicked:
          <!-- <ol> <li v-for="message in messages" v-bind:key="message"> {{message}} </li> </ol>  -->
          <ol>
            <li v-for="message in messages" v-bind:key="message">
              {{ message }}
            </li>
          </ol>
        </p>
        <input type="button" v-on:click="messages = []" value="Clear" />
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
    history:{},
    show: true,
    show2:true,
    messages:[],
    
  }
},

 methods:{
   myToggle(){
     this.show2 = !this.show2;
   },
   search:function(){
     axios
      .get(`https://swapi.dev/api/starships/?search=${this.searchText}`)
      .then(response => {
        this.results = response.data;

      })
        .catch(error => {
        console.log(error);
      
      })
   }
 },
 watch:{
   //SEARCH TEXT DYNAMCIALLY
   /*
    Search text is an input text with v-model="searchText" as soon as some activity happens, the watch will activate and it will goto the model name
    seachText and it call the function 'search'
   */
   searchText: function(){
     this.search();
   }
 },
}
</script>