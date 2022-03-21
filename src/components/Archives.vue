<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { getArchiveData } from "../api/index.js";
import dayjs from 'dayjs';
const route = useRoute();

let archiveId = route.query.archiveId;
let archiveData = ref({});
onMounted(async () => {
  let { data } = await getArchiveData({ archiveId: archiveId });
  console.log(data);
	data.data.archiveDate = dayjs(data.data.archiveDate).format("YY-MM-DD")
  archiveData.value = data.data;
  console.log(archiveData.value);
});
</script>
<template>
  <div class="container">
    <header>
      <div class="title">{{ archiveData.archiveTitle }}</div>
			<div class="flex_row">
				<div>{{archiveData.archiveDate}}</div>
				<div>{{archiveData.tagName}}</div>
			</div>
    </header>
  </div>
</template>
<style scoped>
.flex_column{
	display: flex;
	flex-direction: column;
}
.flex_row{
	display: flex;
	flex-direction: row;
}
.container {
  --titleFs: 32px;
  --contentFs: 18px;
	width: 60%;
	margin: 0 auto;
}
.title{
	font-size: var(--titleFs);
}
</style>
