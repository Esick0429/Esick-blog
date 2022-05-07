<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getArchiveList } from "../api/index";
import dayjs from "dayjs";

let ArchiveData = ref([]);
const router = useRouter();
onMounted(async () => {
  let res = await getArchiveList();
  console.log(res.data);
  ArchiveData.value = res.data;
});
function jumpArchive(archiveId: any) {
  router.push({
    // path:"/archives",
    name: "archives",
    query: { archiveId: archiveId },
  });
}
function gotoTag(tagName: string) {
  router.push({
    name: "tagList",
    query: { tagName: tagName },
  });
}
</script>
<template>
  <div class="item" v-for="(i, index) of ArchiveData">
    <div class="itemTitle" @click="gotoTag(`${index}`)">
      <a style="text-decoration: none; color: var(--titlecolor)">
        {{ index }}
      </a>
    </div>
    <div class="itemContent" v-for="j of i" :key="j['archiveTitle']">
      <div class="articleDate">
        {{ dayjs(j["archiveDate"]).format("YYYY-MM-DD") }}
      </div>
      <div class="articleTitle">
        <a @click="jumpArchive(j['archiveId'])">{{ j["archiveTitle"] }}</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.itemTitle {
  letter-spacing: 0.01em;
  font-size: var(--titleFs);
  font-style: normal;
  font-weight: 700;
  margin-top: calc(100vw * (30 / 1920));
  margin-bottom: calc(100vw * (10 / 1920));
  display: block;
}
.itemContent {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  margin: calc(100vw * (15 / 1920)) 0px;
  height: calc(100vw * (40/1920));
  font-size: var(--contentFs);
	line-height: calc(100vw * (40/1920));
}
.articleDate {
  margin-right: calc(100vw * (30 / 1920));
}
@media screen and (max-width: 768px) {
  /* .itemContent {
    flex-direction: column;
  } */
  .articleDate {
    margin-bottom: calc(100vw * (5 / 1920));
  }
}
</style>
