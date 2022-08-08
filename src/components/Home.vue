<script setup lang="ts">
import { getEverydayQuotes } from "../api/index";
import { onMounted, ref } from "vue";
import HomeItem from "../common/HomeItem.vue";
let everdyQuotes: any = ref({});
onMounted(async () => {
  let res = await getEverydayQuotes();
  everdyQuotes.value = res.data;
  console.log(everdyQuotes);
});
</script>
<template>
  <div class="about">
    <span>
      {{ everdyQuotes.content }}<br />
      {{ everdyQuotes.translation }}
    </span>
    <br />
    <span style="float: right"> ——{{ everdyQuotes.author }} </span>
  </div>
  <div class="srcoll_view">
    <HomeItem />
  </div>
</template>
<style scoped>
.about {
  /* line-height: calc(100vw * (25/1920)); */
  font-size: var(--contentFs);
  letter-spacing: calc(100vw * (1.5 / 1920));
  width: 100%;
  color: #666666;
  font-weight: bold;
  font-family: cursive;
}
.srcoll_view {
  width: 100%;
  height: 75vh;
  overflow: auto;
  margin-top: 30px;
}
.srcoll_view::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.srcoll_view::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
.srcoll_view::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}
@media screen and (max-width: 768px) {
  .srcoll_view {
    height: 60vh;
    margin: 0;
  }
}
</style>
