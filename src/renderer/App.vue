<script setup lang="ts">
import LoginPage from "./pages/LoginPage.vue";

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <router-view></router-view>
  <LoginPage></LoginPage>
</template>
<style lang="scss">
body{
  font-family: $font-family;
  overflow: hidden;
}
</style>
