<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { getArchiveData } from "../api/index";
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
      <div class="archive_content">{{ archiveData.archiveContent }}</div>
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
  /* width: 60%; */
  /* margin: 0 auto; */
}

.title {
  font-size: var(--titleFs);
  color: var(--titlecolor);
  font-family: cursive;
}

.archive_info {
  font-size: var(--contentFs);
  justify-content: space-between;
  margin: 8px 0;
  width: 20%;
}

.archive_content {
  font-size: var(--contentFs);
  white-space: pre-line;
  font-family: cursive;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 8px;
  }

  .archive_info {
    flex-direction: column;
    width: 100%;
  }
}
</style>
