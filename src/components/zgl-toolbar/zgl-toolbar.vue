<template>
	<div class="zgl-toolbar">
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
			<img src="" alt="">
		  <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
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
