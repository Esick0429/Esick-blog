<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {useRoute, useRouter} from "vue-router"
import { getArchiveList } from '../api/index';
import dayjs from 'dayjs';

let ArchiveData = ref([]);
const router = useRouter()
onMounted(async () => {
	let res = await getArchiveList();
	console.log(res.data);
	ArchiveData.value = res.data
});
function jumpArchive(archiveTitle: any){
	localStorage.setItem('archiveId',archiveTitle)
	router.push({
		// path:"/archives",
		name:'archives',
		params:{archiveId:archiveTitle}
	})
}
</script>
<template>
	<div class="item" v-for="(i,index) of ArchiveData" >
		<div class="itemTitle">
			<a href="" style="text-decoration: none;color: #ffffcc;"> {{index}} </a>
		</div>
		<div class="itemContent"  v-for="j of i" :key="j['archiveTitle']">
			<div class="articleDate">{{dayjs(j['archiveDate']).format("YYYY-MM-DD")}}</div>
			<div class="articleTitle">
				<a @click="jumpArchive(j['archiveId'])">{{j['archiveTitle']}}</a>
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
	margin-top: 3rem;
	margin-bottom: 1rem;
	display: block;
}
.itemContent {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	margin: 15px 0px;
	font-size: var(--contentFs);
}
.articleDate {
	margin-right: 3rem;
}
@media screen and (max-width: 768px) {
	.itemContent {
		flex-direction: column;
	}
	.articleDate {
		margin-bottom: 0.5rem;
	}
}
</style>
