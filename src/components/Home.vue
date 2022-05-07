<script setup lang="ts">
import { getEverydayQuotes } from "../api/index";
import { onMounted, ref } from "vue";
import HomeItem from "../common/HomeItem.vue";
let everdyQuotes = ref({});
onMounted(async () => {
  let res = await getEverydayQuotes();
  everdyQuotes.value = res.data;
  console.log(everdyQuotes);
});
</script>
<template>
  <div class="about">
    <span>
      {{everdyQuotes['content']}}<br>
      {{everdyQuotes['translation']}}
    </span>
    <br />
    <span style="float: right"> ——{{everdyQuotes['author']}} </span>
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
}
</style>
