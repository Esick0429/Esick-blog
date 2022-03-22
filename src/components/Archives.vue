<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { getArchiveData } from "../api/index";
import Footer from "../layout/Footer.vue";
import dayjs from 'dayjs';
const route = useRoute();

let archiveId = route.params.archiveId || localStorage.getItem('archiveId');
console.log(route);

let archiveData:any = ref({});
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
			<div class="flex_row archive_info">
				<div>{{archiveData.archiveDate}}</div>
				<div>{{archiveData.tagName}}</div>
			</div>
    </header>
		<section>
			<div class="archive_content">{{archiveData.archiveContent}}</div>
		</section>
  </div>
	<Footer />
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
	width: 60%;
	margin: 0 auto;
}
.title{
	font-size: var(--titleFs);
}
.archive_info{
	font-size: var(--contentFs);
	justify-content: space-between;
	margin: 8px 0;
	width: 30%;
}
.archive_content{
	font-size: 1.6rem;
}
</style>
