<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    
    <img id="coffee-cup-image" src="./assets/coffee-cup-svgrepo-com.svg" alt="Coffee">
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
#coffee-cup-image {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
