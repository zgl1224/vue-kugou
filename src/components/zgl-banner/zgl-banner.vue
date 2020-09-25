<template>
	<div class="zgl-banner" >
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<router-link 
				tag="van-swipe-item" 
				v-for="(item,index) of data1" 
				:to="{name:'detail',params:{_id:item._id},query:{collectionName}}"
				>
				<!-- :to="{name:'detail',params:{id:index},query:{collectionName}}" -->
				<!-- <van-swipe-item > -->
					<img :src="item.banner" alt="">
				<!-- </van-swipe-item> -->
				</router-link>
			</van-swipe>
		<!-- @click.native="show(item._id)" :key="item._id" -->
	</div>
</template>
<script>
	export default {
		name:'zgl-banner',
		props:{
			data1:{
				type:Array,
				default:''
			},
			collectionName:{
				type:String,
				default:''
			}
		},
		components:{},
		methods:{
		}
	}
</script>

<style scoped>
		.zgl-banner{
			margin-top: 100px;
			z-index: 99990;
		}
		.my-swipe .van-swipe-item {
			height:  2.5rem;
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
	  }
		.my-swipe .van-swipe-item img{
			height: 2.5rem;
			width: 100%;
		}	
</style>
