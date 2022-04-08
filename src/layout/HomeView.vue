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
  padding: 0 3rem;
  /* height: 100vh; */
  min-height: 100vh;
}
section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 0.5rem;
}
@media screen and (max-width: 768px) {
  .view{
    width: 100%;
    padding: 0;
  }
}
</style>
