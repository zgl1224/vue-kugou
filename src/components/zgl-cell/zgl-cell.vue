<template>
	<div class="zgl-cell ">
		  <div @click="toDetail">
				<van-cell
				:title="data.title"
				:value="data.first" 
				:style="{background:bgColor}" 
				size="large"
				style="borderBottom:1px solid #ccc"/>
			</div>
	</div>
</template>
	
<script>
	export default {
		name:'zgl-cell',
		props:{
			bgColor:{
				type:String,
				default:'#fff'
			},
			data:{
				type:Object,
				required:true
			},
			collectionName:{
				type:String,
				default:null
			}
		},
		mounted(){},
		methods:{
			toDetail(){
				// console.log(1245);
				if(this.collectionName){
				// console.log(7777);
					// 编程式跳转
					this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`);
				}
			}
		}
	}
</script>

<style>
</style>
