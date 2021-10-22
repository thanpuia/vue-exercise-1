<template>
  <div>
    Hello there, the angle from my nightmare!<br>
    {{ text.toUpperCase() }} <br>
    <div v-bind:name="myBind">Dynamic Binding</div>

    <span v-if="yes">
      Yes
    </span>

    <span v-else>
      No
    </span>

    <div>
      <ul>
        <li :key="color.id" v-for="(color, fff) in colors">
          Sl.{{ fff+1 }}  ||  {{ color.price }}
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
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
  }
   
},

 methods:{
   
 }
}
</script>