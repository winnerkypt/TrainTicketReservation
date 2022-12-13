<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>

  <div class="bg-gray-100 min-h-screen">
    <NavBar />
    <div><router-view></router-view></div>
  </div>

</template>

<style scoped>

</style>
