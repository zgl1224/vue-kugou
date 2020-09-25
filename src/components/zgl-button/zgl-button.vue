<template>
	<div class="zgl-button">
		<van-button id="btn" @click="$emit('click',$event)" type="primary" block :text="text"></van-button>
	</div>
</template>
	
<script>
	export default {
		name:'zgl-button',
		props:{
			text:{
				type:String,
				default:''
			}
			// collectionName:{
			// 	type:String,
			// 	required:true
			// }
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
	
	#btn{
		margin: 0 auto;
		font-size: 0.36rem;
		background: #2ea8f9;
		width: 5.17rem;
	}
</style>
