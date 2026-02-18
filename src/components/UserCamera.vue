<script setup lang="ts">

import { io } from "socket.io-client";

const socket = io("https://3-control.ru");

let pc: RTCPeerConnection;
let localStream: MediaStream;

async function start(roomId: string) {

  // подключаемся к комнате
  socket.emit("join-room", roomId);

  // получаем камеру
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });

  const video = document.getElementById("localVideo") as HTMLVideoElement;
  video.srcObject = localStream;

  pc = new RTCPeerConnection({
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" }
    ]
  });

  localStream.getTracks().forEach(track => {
    pc.addTrack(track, localStream);
  });

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit("candidate", {
        targetId: null, // заполним позже
        candidate: event.candidate
      });
    }
  };

  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  socket.emit("offer", { roomId, offer });
}

// получаем answer от Admin
socket.on("answer", async (answer) => {
  await pc.setRemoteDescription(answer);
});

// получаем candidate
socket.on("candidate", async (candidate) => {
  await pc.addIceCandidate(candidate);
});

// ----------------


import { ref, onMounted, onBeforeUnmount } from 'vue';

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

function joinRoom(roomId: string) {
  socket.emit("join-room", roomId);
}

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
