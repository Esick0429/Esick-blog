<script setup lang="ts">
import { getEverydayQuotes } from "../api/index";
import { onMounted, ref } from "vue";
import HomeItem from "../common/HomeItem.vue";
import { useRouter } from "vue-router";
import { getArchiveList } from "../api/index";
let everdyQuotes: any = ref({});
onMounted(async () => {
  let everdyQuotesResult = await getEverydayQuotes();
  let archiveList = await getArchiveList();
  everdyQuotes.value = everdyQuotesResult;
  ArchiveData.value = archiveList;
});

let ArchiveData = ref([]);
const router = useRouter();
function gotoTag(tagName: string) {
  router.push({
    name: "tagList",
    params: { tagName: tagName },
  });
}
</script>
<template>
  <div
    class="about"
    v-if="everdyQuotes.content && everdyQuotes.content.length > 1"
  >
    <span>
      {{ everdyQuotes.content }}<br />
      {{ everdyQuotes.translation }}
    </span>
    <br />
    <span style="float: right; font-size: 16px"
      >{{ "———" + everdyQuotes.author }}
    </span>
  </div>
  <div class="srcoll_view">
    <div>
      <div class="item" v-for="(i, index) of ArchiveData">
        <div class="itemTitle" @click="gotoTag(`${index}`)">
          <a style="text-decoration: none; color: var(--titlecolor)">
            {{ index }}
          </a>
        </div>
        <HomeItem :array="i"></HomeItem>
      </div>
    </div>
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
  /* height: 75vh; */
  flex: 1;
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
.itemTitle {
  letter-spacing: 0.01em;
  font-size: var(--titleFs);
  font-style: normal;
  font-weight: 700;
  margin-top: calc(100vw * (30 / 1920));
  margin-bottom: calc(100vw * (10 / 1920));
  display: block;
}
@media screen and (max-width: 768px) {
  .srcoll_view {
    height: 60vh;
    margin: 0;
  }
  .itemTitle {
    letter-spacing: 0.01em;
    font-size: var(--titleFs);
    font-style: normal;
    font-weight: 700;
    margin-top: calc(100vw * (12 / 375));
    margin-bottom: calc(100vw * (10 / 375));
    display: block;
  }
}
</style>
