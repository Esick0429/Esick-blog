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
pre {
  overflow: auto;
  position: relative;
  line-height: 1.75;
  padding: calc(100vw * (18 / 1920));
  background: #f8f8f8;
}
pre > code {
  color: #333;
  font-weight: 600;
  font-size: calc(100vw * (16 / 1920));
  font-family: "sans-serif";
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
  pre {
    overflow: auto;
    position: relative;
    line-height: 1.75;
    padding: calc(100vw * (10 / 375));
  }
  pre > code {
    font-size: calc(100vw * (16 / 375));
  }
}
</style>
