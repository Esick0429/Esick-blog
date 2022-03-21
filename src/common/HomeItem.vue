<script setup>
import { onMounted, ref } from 'vue';
import {useRoute, useRouter} from "vue-router"
import { getArchiveList } from '../api/index.js';
let ArchiveData = ref([]);
const router = useRouter()
onMounted(async () => {
	let res = await getArchiveList();
	console.log(res.data);
	for(let i in res.data){
		console.log(i);
	}
	ArchiveData.value = res.data
});
function jumpArchive(archiveTitle){
	router.push({
		path:"/archives",
		query:{archiveId:archiveTitle}
	})
}
</script>
<template>
	<div class="item" v-for="(i,index) of ArchiveData" >
		<div class="itemTitle">
			<a href="" style="text-decoration: none"> {{index}} </a>
		</div>
		<div class="itemContent"  v-for="j of i" :key="j.archiveTitle">
			<div class="articleDate">{{j.archiveDate}}</div>
			<div class="articleTitle">
				<a @click="jumpArchive(j.archiveId)">{{j.archiveTitle}}</a>
			</div>
		</div>
	</div>
</template>
<style scoped>
.itemTitle {
	letter-spacing: 0.01em;
	font-size: 1.5em;
	font-style: normal;
	font-weight: 700;
	color: #2bbc8a;
	margin-top: 3rem;
	margin-bottom: 1rem;
	display: block;
}
.itemContent {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
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
