<template>
  <div>
    {{ $store.state.title }}
    <Notes/>

    <AddNewNote/>
    
  </div>
</template>

<script>
//THIS IS COMMENT OUT FOR TESTING 
//import HelloWorld from './components/HelloWorld.vue'
import Notes from "./components/Notes";
import AddNewNote from "./components/AddNewNote";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Notes,
    AddNewNote,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>