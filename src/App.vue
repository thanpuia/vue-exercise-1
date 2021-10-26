<template>
  <div>
    {{ $store.state.title }}
    <!-- <Notes/>

    <AddNewNote/> -->

    <Test/>
    <Modal/>
    
  </div>
</template>

<script>
//1 THIS IS COMMENT OUT FOR TESTING 
//import HelloWorld from './components/HelloWorld.vue'
//2. VUEX
//import Notes from "./components/Notes";
//import AddNewNote from "./components/AddNewNote";
//3. MIXIN
import Test from "./components/Test.vue";
import Modal from "./components/Modal.vue";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Notes,
    //AddNewNote,
    Test,
    Modal,
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