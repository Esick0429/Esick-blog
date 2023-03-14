<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getArchiveList } from "../api/index";
import dayjs from "dayjs";
let ArchiveData = ref([]);
const router = useRouter();
const array = defineProps(["array"]);
onMounted(async () => {
  let res = await getArchiveList();
  ArchiveData.value = res;
});
function jumpArchive(archiveId: any) {
  router.push({
    // path:"/archives",
    name: "archives",
    query: { archiveId: archiveId },
  });
}
</script>
<template>
  <div class="item" v-for="(i, index) of ArchiveData">
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
.itemContent {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  margin: calc(100vw * (15 / 1920)) 0px;
  height: calc(100vw * (40 / 1920));
  font-size: var(--contentFs);
  line-height: calc(100vw * (40 / 1920));
}
.articleDate {
  margin-right: calc(100vw * (30 / 1920));
}
@media screen and (max-width: 768px) {
  /* .itemContent {
    flex-direction: column;
  } */
  .articleDate {
    margin-bottom: calc(100vw * (5 / 375));
    width: 30%;
  }
  .articleTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }

  .itemContent {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    margin: calc(100vw * (8 / 375)) 0px;
    height: calc(100vw * (28 / 375));
    font-size: var(--contentFs);
    line-height: calc(100vw * (28 / 375));
  }
}
</style>
