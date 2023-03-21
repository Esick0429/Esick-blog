<script setup lang="ts">
import { onMounted, Ref, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { getArchiveList } from "../api/index";
import dayjs from "dayjs";
let ArchiveData = ref({});
const router = useRouter();
const props = defineProps({
  array: {
    type: Object,
    required: true,
    default: () => []
  },
  tagFlag: { type: Boolean, default: false }
})
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
    params: { tagName: tagName },
  });
}
watchEffect(() => {
  ArchiveData.value = props.array
})
</script>
<template>
  <div class="item" v-for="(i, index) in ArchiveData">
    <div class="itemTitle" @click="gotoTag(`${index}`)" v-if="tagFlag">
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
