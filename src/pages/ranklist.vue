<template>
	<div class="ranklist">
		<HeaderNav bgColor=""/>
		<ZglCell1 
		v-for="(item,index) of list"
		:key="item.id"
		:data="item"
		collectionName="ranklist"
		/>
		<ZglToolbar></ZglToolbar>
	</div>
</template>
	
<script>
	import axios from 'axios'
	import HeaderNav from '../components/zgl-header-nav/zgl-header-nav.vue'
	import ZglCell1 from '../components/zgl-cell1/zgl-cell1.vue'
	import ZglToolbar from '../components/zgl-toolbar/zgl-toolbar.vue'
	export default {
		name:'ranklist',
		props:{},
		data(){
			return {
				list:[],
			}
		},
		components:{
			HeaderNav,ZglCell1,ZglToolbar
		},
		mounted(){
			axios({
				url:'/api/ranklist',
				// headers:{token:'1234567894561234'},
				params:{_limit:12,_page:1}
			}).then(res=>{
				// console.log(res.data.data);
				this.list = res.data.data
			})
		},
		methods:{}
	}
</script>

<style>
	.ranklist{
		padding-top: 100px;
	}
</style>
