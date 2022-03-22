<script setup lang="ts">
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Home from "../components/Home.vue";
</script>

<template>
  <div class="view">
    <Header />
    <Home />
  </div>
  <Footer />
</template>

<style scoped>
.view {
  width: 60%;
  position: relative;
  margin: 0 auto;
  padding: 0 3rem;
}
</style>
