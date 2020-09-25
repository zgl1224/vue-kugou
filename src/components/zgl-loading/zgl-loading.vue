<template>
	<div class="zgl-loading">
		<!-- <van-loading color="#2ca2f9" /> -->
		<van-loading type="spinner" size='40px' color="#1989fa" />
	</div>
</template>
	
<script>
	export default {
		name:'zgl-loading',
		props:{
			size:{
				type:String,
				default:'50px'
			}
		},
		data(){
			return {
				
			}
		},
		components:{},
		mounted(){},
		methods:{}
	}
</script>

<style>
	.zgl-loading{
		margin: 0 auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
