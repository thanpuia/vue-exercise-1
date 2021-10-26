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
      
         
      <div v-on:click="messages.push('Milk')">Milk</div>
      <div v-on:click="messages.push('Sugar')">Sugar</div>

        <p> Last clicked:
           <ol>
            <li v-for="message in messages" v-bind:key="message">
              {{ message }}
            </li>
          </ol>
        </p>
        <input type="button" v-on:click="messages = []" value="Clear" />
      </div>
      <div>
      <h1>EXAMPLE 8 BINDING (v-bind)</h1>
        <input type="text" v-model="inputs.text"/>
        <p>
          <strong>Text: </strong> {{ inputs.text }}
        </p>
    
        <input type="text" v-model.number="inputs.numberAsNumber">
        <p>
          <strong>Text: </strong>{{ inputs.numberAsNumber }}
        </p>

        <input type="radio" v-model="inputs.radios" value="Mango" id="mango">
        <label for="mango">Mangoo</label>
        <input type="radio" v-model="inputs.radios" value="Apple" id="apple">
        <label for="apple">Apples</label>

        <p> {{inputs.radios}}</p>

        <h4>Select</h4>
        <select  v-model="inputs.multipleselect" multiple>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
        <p><strong>Multi Select: </strong>{{inputs.multipleselect}}</p>
      </div>
      <div>
      
        
          <h1>EXAMPLE 9 MODIFIER LAZY</h1>
          <h5>Using the .lazy modifier to change the model after the input loses focus and fires a change event</h5>
          <input type="text" v-model.lazy="lazy"/>
          <p>
            <strong>Lazy: </strong> {{ lazy }}
          </p>

          <input type="text" v-model.trim="trim"/>
          <p>
            <strong>My trim space</strong> {{ trim }}
          </p>
        </div>
       

       <div>
         <h1>EXAMPLE 10 BINDING CSS STYLE WTIH INLINE OBJECT</h1>
         <input type="text" v-model="fontSize">
         <p v-bind:style="{fontSize: fontSize +'px'}">
           My Dynamic fontsize using inline object
         </p>

         <input type="text" v-model="myFontSize">

         <p v-bind:style="[fontSizeObject,fontColorObject]">
            My Very Vue vue

         </p>
       </div>

       <div>
        <h1>EXAMPLE 11 DYNAMIC CLASS</h1>
        <input type="text" v-model="myErrorTestingInput" v-bind:class="{ error: inputError}">
 

       </div>
      
        <div>
        <h1>EXAMPLE 12 STATE MANAGEMENT</h1>
        

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
    inputs:{
      text:"",
      numberAsString:0,
      numberAsNumber:0,
      radios:'go!',
      multipleselect:[],
    },
    lazy:"",
    trim:"",
    fontSize:12,  
    myFontSize:12,
    fontSizeObject:{
      fontSize:32+'px',
    },
    fontColorObject:{
      color:'blue'
    },
    myErrorTestingInput: "",
    myErrorTestingInput2: "",

    inputError:null,

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
   myFontSize : function(){
     this.fontSizeObject.fontSize = this.myFontSize + 'px';
   },
   searchText: function(){
     this.search();
   },
    myErrorTestingInput: function() {
      var results = parseInt(this.myErrorTestingInput);
      if(isNaN(results)){
        this.inputError = true;
      }else
        this.inputError = false;
    }
 },
 

}
</script>

<style>
  .error{
    color: red;
    border: red 3px solid;
  }
</style>