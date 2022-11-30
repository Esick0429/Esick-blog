<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ElSelect, ElOption } from "element-plus";
import { getTagList, getTagArchiveList } from "../api/index";
import { useRoute, useRouter } from "vue-router";
import dayjs from "dayjs";
const route = useRoute();
const router = useRouter();
const value = ref(route.params.tagName);
let options = ref([]);
let archivesList = ref([]);
let dataIsNone = ref(false);
// const loading = ref(true)
onMounted(async () => {
  let result = await getTagList();
  options.value = result;
  console.log(value.value);

  if (!value.value) {
    value.value = result[1].tagName;
  }
  await selectTag();
});
async function selectTag() {
  // loading.value = true
  let result = await getTagArchiveList({ tagName: value.value });
  if (result.length) {
    archivesList.value = result;
    dataIsNone.value = false;
    // loading.value = false
  } else {
    dataIsNone.value = true;
  }
}
function jumpArchive(archiveId: any) {
  router.push({
    // path:"/archives",
    name: "archives",
    query: { archiveId: archiveId },
  });
}
</script>
<template>
  <div class="tag_top">
    <el-select
      v-model="value"
      class="m-2"
      placeholder="Select"
      size="large"
      @change="selectTag"
    >
      <el-option
        v-for="item in options"
        :key="item['tagId']"
        :label="item['tagName']"
        :value="item['tagName']"
      />
    </el-select>
  </div>
  <div class="flex_column">
    <div v-if="dataIsNone">该Tag下暂时没有文章噢~</div>
    <div v-else>
      <div v-for="i of archivesList" class="archiveItem">
        <div class="archiveDate">
          {{ dayjs(i["archiveDate"]).format("YYYY-MM-DD") }}
        </div>
        <div @click="jumpArchive(i['archiveId'])">{{ i["archiveTitle"] }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tag_top {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.archiveItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: calc(100vw * (15 / 1920)) 0px;
  font-size: var(--contentFs);
  height: calc(100vw * (40 / 1920));
  line-height: calc(100vw * (40 / 1920));
}
.archiveDate {
  margin-right: calc(100vw * 20 / 1920);
}
@media screen and (max-width: 768px) {
  /* .itemContent {
    flex-direction: column;
  } */
  .archiveItem {
    margin: calc(100vw * (8 / 375)) 0px;
    height: calc(100vw * (28 / 375));
    font-size: var(--contentFs);
    line-height: calc(100vw * (28 / 375));
  }
  .archiveDate {
    margin-right: calc(100vw * 20 / 375);
  }
}
</style>
