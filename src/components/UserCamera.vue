<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const video = ref<HTMLVideoElement | null>(null)
let stream: MediaStream | null = null

const startCamera = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })

  if (video.value) {
    video.value.srcObject = stream
  }
}

const stopCamera = () => {
  stream?.getTracks().forEach(track => track.stop())
}

onMounted(() => {
  startCamera()
})

onBeforeUnmount(() => {
  stopCamera()
})

</script>

<template>
  <div class="camera-box">
    <video
      ref="video"
      autoplay
      playsinline
    ></video>
  </div>
</template>

<style scoped>


</style>
