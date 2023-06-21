<script setup lang="ts">
import { RouterView } from "vue-router"
import topNav from "./components/TopNav.vue"
</script>

<template>
  <top-nav />
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  width: 1200px;
  margin: 30px auto 0;
}
</style>
