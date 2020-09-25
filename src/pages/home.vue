<template>
	<div class="home">
		<HeaderNav bgColor=""/>
		<ZglBanner 
		:data1="banner"  
		collectionName="banner"/>
		<ZglCell 
		v-for="(item,index) of cell"
		:data="item"
		collectionName="cell"
		/>
	</div>
</template>
	
<script>
	import axios from 'axios'
	import HeaderNav from '../components/zgl-header-nav/zgl-header-nav.vue'
	import ZglCell from '../components/zgl-cell/zgl-cell.vue'
	import ZglBanner from '../components/zgl-banner/zgl-banner.vue'
	export default {
		name:'home',
		data(){
			return {
				cell:[],
				banner:[]
			}
		},
		components:{
			HeaderNav,ZglCell,ZglBanner
		},
		mounted(){
			axios({
				url:'/api/banner',
				params:{_limit:3,_page:1}
			}).then(res=>{
				this.banner = res.data.data
				// console.log(this.list);
			})
			axios({
				url:'/api/cell',
				params:{_limit:50,_page:1}
			}).then(res=>{
				// console.log(res.data.data);
				this.cell = res.data.data
			})
		},
		methods:{
		}
	}
</script>
<style scoped>
	.home{
		/* padding-top: 100px; */
	}
</style>
