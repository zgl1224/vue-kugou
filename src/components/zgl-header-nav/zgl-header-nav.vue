<template>
	<div class="header-nav">
		<ul>
			<router-link to="/home" tag="li" active-class="active"><a href="javascript:;">新歌</a></router-link>
			<router-link to="/songlist" tag="li" active-class="active"><a href="javascript:;">排行</a></router-link>
			<router-link to="/ranklist" tag="li" active-class="active"><a href="javascript:;">歌单</a></router-link>
			<router-link to="/user" tag="li" active-class="active"><a href="javascript:;">用户</a></router-link>
			<!-- <li><a href="javascript:;">新歌</a></li>
			<li><a href="javascript:;">排行</a></li>
			<li><a href="javascript:;">歌单</a></li>
			<li><a href="javascript:;">用户</a></li> -->
		</ul>
	</div>
</template>
	
<script>
	export default {
		name:'header-nav',
		props:{},
		data(){
			return {
			}
		},
		components:{},
		mounted(){},
		methods:{}
	}
</script>

<style scoped>
	.header-nav{
		width: 100%;
		height: 40px;
		overflow: hidden;
		position: fixed;
		top: 60px;
		background: #fff;
		z-index: 2;
	}
	.header-nav ul{
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.header-nav ul li{
		font-size: 16px;
	}
	.header-nav ul li a{
		display: block;width: 80px;text-align: center;height: 40px;line-height: 40px;
	}
	.header-nav ul li.active a{
		border-bottom:2px solid #5477b2; color:#5477b2;
	}
</style>
