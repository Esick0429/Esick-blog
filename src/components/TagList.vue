<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ElSelect, ElOption } from "element-plus";
import { getTagList, getTagArchiveList } from "../api/index";
import { useRoute, useRouter } from "vue-router";
import HomeItem from "../common/HomeItem.vue";


const route = useRoute();
const router = useRouter();
const value = ref(route.params.tagName);
let options = ref([]);
let archivesList = ref({value:[]});
let dataIsNone = ref(false);
// const loading = ref(true)
onMounted(async () => {
  let result = await getTagList();
  options.value = result;
  if (!value.value) {
    value.value = result[0].tagName;
  }
  await selectTag();
});
async function selectTag() {
  let result = await getTagArchiveList({ tagName: value.value });
  if (result.length) {
    archivesList.value.value = result;
    console.log(archivesList.value);
    dataIsNone.value = false;
  } else {
    dataIsNone.value = true;
  }
}
</script>
<template>
  <div class="tag_top">
    <el-select v-model="value" class="m-2" placeholder="Select" size="large" @change="selectTag">
      <el-option v-for="item in options" :key="item['tagId']" :label="item['tagName']" :value="item['tagName']" />
    </el-select>
  </div>
  <div class="flex_column">
    <div v-if="dataIsNone">该Tag下暂时没有文章噢~</div>
    <div v-else>
      <HomeItem :array=" archivesList " />
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
</style>
