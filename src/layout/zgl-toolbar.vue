<template>
	<div class="zgl-toolbar">
		<!-- <van-tabbar v-model="active"> -->
		 <!-- <van-tabbar-item icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item icon="friends-o">我的</van-tabbar-item> -->
		<!-- </van-tabbar> -->
		
		<van-tabbar route>
		  <van-tabbar-item replace to="/home" icon="home-o">
		    首页
		  </van-tabbar-item>
		  <van-tabbar-item replace to="/user" icon="friends-o">
		    我的
		  </van-tabbar-item>
		</van-tabbar>
		
		
	</div>
</template>
	
<script>
	export default {
		name:'zgl-toolbar',
		props:{},
		data() {
			return {
				active: 0,
				
			}
		},
		components:{},
		mounted(){},
		methods:{}
	}
</script>

<style>
</style>
