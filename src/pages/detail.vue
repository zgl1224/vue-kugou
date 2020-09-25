<template>
	<div class="detail" v-if="list.title">
		<div class="top">
			<van-nav-bar
			  left-text="返回"
				left-arrow
				@click-left="onClickLeft"
			/>
		</div>
		<van-image
		  width="100%"
		  height="240px"
		  :src="list.img"
		/>
		<div class="song">{{list.title}}</div>
		<div class="name" v-html="list.content"></div>
	</div>
	<ZglFrame v-else></ZglFrame>
</template>
<script>
	import ZglCell from '../components/zgl-cell/zgl-cell.vue'
	import ZglFrame from '../components/zgl-frame/zgl-frame.vue'
	export default {
		name:'detail',
		props:{
		},
		data(){
			return {
				list:{}
			}
		},
		components:{ZglCell,ZglFrame},
		mounted(){
			let collectionName = this.$route.query.collectionName;
			let _id = this.$route.params._id;
			this.$axios({
				url:`/api/${collectionName}/${_id}`
			}).then(res=>{
				// console.log(res.data.data);
				this.list = res.data.data
			})
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	.song{
		background: #eeeeee;
		font-size: 30px;
		text-align: center;
		height: 100px;
		line-height: 100px;
	}
	.name{
		/* background: #f5f5f5; */
		/* font-size: 20px; */
		/* text-align: center; */
		/* height: 100px; */
		/* line-height: 100px; */
		padding:0 20px
	}
	.top{
		position: sticky;
		top: 0;
		z-index: 20;
	}
</style>
