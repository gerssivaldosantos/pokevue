<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import PokeList from './components/PokeList.vue';
</script>

<template>
  <Navbar />
  <PokeList/>
</template>

<style>
#app {
  background-color: rgb(30, 30, 30);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
