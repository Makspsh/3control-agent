<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ isCameraActive: boolean }>()
const emit = defineEmits<{
  (e: 'toggle-camera'): void
}>()

const isMicrophoneActive = ref(false);

</script>

<template>
  <div class="control-panel">
    <h2 class="title">Switch premissions</h2>
    <ul class="premissions">
      <li class="camera">
        <button 
          class="cam-btn"
          :class="{ active: isCameraActive }"
          @click="emit('toggle-camera')"
        >
          camera
        </button>
      </li>
      <li class="microphone">
        <button 
          class="mic-btn"
          :class="{ active: isMicrophoneActive }"
          @click="isMicrophoneActive = !isMicrophoneActive"
        >
          microphone
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.control-panel {
  display: flex;
  flex-direction: column;
}
.premissions {
  display: grid;
  gap: 24px;
}
.active {
  color: green;
}

</style>
