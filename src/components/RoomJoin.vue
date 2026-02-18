<script setup lang="ts">

</script>

<template>
  <div class="room-panel">
    <h2 class="title">Connect to a Room</h2>
    <div class="connect-box">
      <input class="connect-id" placeholder="id room" />
      <input class="connect-password" placeholder="password" />
      <button class="connect-btn">Connect</button>
    </div>

  </div>
</template>

<style scoped>
.room-panel {
  display: flex;
  flex-direction: column;
}
.connect-box {
  display: flex;
  flex-direction: column;
}
input {
  padding: 10px 0;
}
</style>
