<template>
	<div class="songlist">
		<!-- <HeaderLogo bgColor=""/> -->
		<HeaderNav bgColor=""/>
		<!-- <ZglBanner :data="list"/> -->
		<ZglCell2 
		v-for="(item,index) of list"
		:key="item.id"
		:data="item"
		collectionName="songlist"
		/>
	</div>
</template>
	
<script>
	import HeaderNav from '../components/zgl-header-nav/zgl-header-nav.vue'
	import axios from 'axios'
	import ZglCell2 from '../components/zgl-cell2/zgl-cell2.vue'
	export default {
		name:'songlist',
		props:{},
		data(){
			return {
				list:{},
			}
		},
		components:{
			HeaderNav,ZglCell2
		},
		mounted(){
			axios({
				url:'/api/songlist',
				params:{_limit:15,_page:1}
			}).then(res=>{
				// console.log(res);
				this.list = res.data.data
			})
		},
		methods:{
			
		}
	}
</script>

<style>
	.songlist{
		padding-top: 100px;
	}
</style>
