<script setup lang="ts">
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
// import Home from "../components/Home.vue";
</script>

<template>
  <div class="view">
    <Header />
    <router-view />
    <Footer />
  </div>

</template>

<style scoped>
.view {
  width: 60%;
  position: relative;
  margin: 0 auto;
  padding: 0 3rem;
  height: 100vh;
  min-height: 100vh;
}
@media screen and (max-width: 768px) {
  .view{
    width: 100%;
    padding: 0;
  }
}
</style>
