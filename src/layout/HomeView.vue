<script setup lang="ts">
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
// import Home from "../components/Home.vue";
</script>

<template>
  <div class="view">
    <Header />
    <section>
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.view {
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 calc(100vw * (30 / 1920));
  /* height: 100vh; */
  min-height: 100vh;
}
section {
  margin-top: calc(100vw * (40 / 1920));
  margin-bottom: calc(100vw * (20 / 1920));
  padding: 0 calc(100vw * (5 / 1920));
}
@media screen and (max-width: 768px) {
  .view {
    width: 100%;
    padding: 0;
  }
}
</style>
