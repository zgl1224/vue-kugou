<template>
	<div class="user">
		
		<van-nav-bar
		  left-text="返回"
			right-text="注销"
			left-arrow
			@click-left="$router.go(-1)"
			@click-right="onClickRight"
		/>
		
		<van-image
		  width="100%"
		  height="100%"
		  fit="contain"
		  src="https://img.yzcdn.cn/vant/cat.jpeg"
		/>
		<p>昵称: <span>{{$route.query.user.nikename}}</span></p>
		<ul>
			<li><span>个人信息</span><span class="float_right">></span></li>
			<li><span>粉丝数: {{$route.query.user.follow}}</span><span class="float_right">></span></li>
			<li><span>收藏歌曲: {{$route.query.user.songs}}</span><span class="float_right">></span></li>
			<li><span>收藏歌单: {{$route.query.user.songlist}}</span><span class="float_right">></span></li>
		</ul>
		
		<ZglToolbar></ZglToolbar>
		
	</div>
</template>
	
<script>
	import axios from 'axios'
	import ZglToolbar from '../components/zgl-toolbar/zgl-toolbar.vue'
	// var userr = JSON.parse(window.localStorage.getItem('user')).data.nikename
	export default {
		name:'user',
		props:{},
		data(){
			return {
			}
		},
		components:{ZglToolbar},
		mounted(){},
		methods:{
			onClickRight(){
				window.localStorage.removeItem('user');
				this.$router.push('/login')
			}
		},
		beforeRouteEnter(to,from,next) {
			axios({
					url:'api/user',
				}).then(res=>{
					if(res.data.err===0){
						to.query.user = res.data.data
						next()
					}else{
						next('/login')
					}
				})
		},
		mounted() {
			},
		}
</script>

<style scoped>
	ul{
		width: 100%;
		padding: 0 10px;
	}
	li{
		width: 100%;
		height: 50px;
		/* background: pink; */
		display: block;
		border-bottom: 1px solid #ccc;
		/* text-align: center; */
		line-height: 50px;padding-left: 20px;
	}
	p{
		width: 100%;
		height: 80px;
		background: #f9f9f9;
		font-size: 20px;
		text-align: center;
		line-height: 80px;
	}
</style>
