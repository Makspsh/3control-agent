<script setup lang="ts">
import { ref } from 'vue'

import ControlPanel from './components/ControlPanel.vue';
import UserCamera from './components/UserCamera.vue';

const isCameraActive = ref(false);
</script>

<template>
  
  <ControlPanel
    :is-camera-active="isCameraActive"
    @toggle-camera="isCameraActive = !isCameraActive"
  />
  <UserCamera v-if="isCameraActive" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
