<template>
	<div class="zgl-cell2" @click="toDetail">
		<ul>
			<li>
				<img :src="data.img" alt="">
				<span>{{data.title}}</span>
				<i> 播放: {{data.num}}</i>
				<em>></em>
			</li>
		</ul>
		
	</div>
</template>
	
<script>
	export default {
		name:'zgl-cell2',
		props:{
			data:{
				type:Object,
				default:''
			},
			collectionName:{
				type:String,
				default:null
			}
		},
		data(){
			return {
			}
		},
		components:{},
		mounted(){},
		methods:{
			toDetail(){
				console.log(1245);
				if(this.collectionName){
				console.log(7777);
					// 编程式跳转
				this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`);
				}
			}
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	.zgl-cell2{
		/* margin-top: 100px; */
	}
	ul{
		width: 100%;
	}
	li{
		height: 1.3rem;
		padding: 5px 0 5px 5px;
		position: relative;
		border-bottom: 1px solid #ccc;
	}
	img{
		height: 100%;
	}
	span{
		position: absolute;
		top: 0.4rem;
		left: 1.3rem;
		font-size: 15px;
	}
	em{
		position: absolute;
		right: 0.2rem;
		top: 0.5rem;
		font-size: 0.3rem;
	}
	i{
		font-style: normal;
		font-size: 12px;
		margin-left: 6px;
	}
</style>
