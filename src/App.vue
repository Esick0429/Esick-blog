<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <router-view />
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #99cccc;
}
#app {
  --titleFs: calc(100vw * (36 / 1920));
  --contentFs: calc(100vw * (18 / 1920));
  --titlecolor: #ffffcc;
  font-family: Menlo, "Meslo LG", "Helvetica Neue", Helvetica, Arial, sans-serif,
    "微软雅黑", monospace;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
@media screen and (max-width: 768px) {
  #app {
    --titleFs: calc(100vw * (24 / 375));
    --contentFs: calc(100vw * (18 / 375));
  }
}
</style>
