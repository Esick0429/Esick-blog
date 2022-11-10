<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { getArchiveData } from "../api/index";
import Editor from "../common/Editor.vue";
import dayjs from "dayjs";
const route = useRoute();

let archiveId = route.query.archiveId as string;

let archiveData: any = ref({});
onMounted(async () => {
  let { data } = await getArchiveData({ archiveId: archiveId });
  data.data.archiveDate = dayjs(data.data.archiveDate).format("YY-MM-DD");
  archiveData.value = data.data;
});
</script>
<template>
  <div class="container">
    <header>
      <div class="title">{{ archiveData.archiveTitle }}</div>
      <div class="flex_row archive_info">
        <div>{{ archiveData.archiveDate }}</div>
        <div>{{ archiveData.tagName }}</div>
      </div>
    </header>
    <section>
      <div class="archive_content">
        <!-- <div v-html="archiveData.archiveContent"></div> -->
        <Editor :value="archiveData.archiveContent"></Editor>
      </div>
    </section>
  </div>
</template>
<style scoped>
.flex_column {
  display: flex;
  flex-direction: column;
}

.flex_row {
  display: flex;
  flex-direction: row;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

section {
  overflow: auto;
}

section::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
section::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
section::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.title {
  font-size: var(--titleFs);
  color: var(--titlecolor);
  font-family: cursive;
  padding: 0 10px;
}

.archive_info {
  font-size: var(--contentFs);
  justify-content: space-between;
  margin: 8px 0;
  padding: 0 10px;
  width: 20%;
}

.archive_content {
  font-size: var(--contentFs);
  white-space: pre-line;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    box-sizing: border-box;
  }

  .archive_info {
    flex-direction: column;
    width: 100%;
  }
}
</style>
