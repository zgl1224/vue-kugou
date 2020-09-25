<template>
	<!-- 顶部导航栏 -->
	<div class="reg">
		<van-nav-bar
		  title="注册"
		  left-text="返回"
		  right-text="登录"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
		/>
		<div class="box">
			<img src="../assets/images/head.jpg" alt="">
		</div>
		<ZglInput v-model="username" label="账号"></ZglInput>
		<ZglInput v-model="password" type="password" label="密码"></ZglInput>
		<ZglBtn text="注册"  style="margin-top: 20px;" @click="reg"></ZglBtn>
	</div>
</template>
<script>
	import ZglInput from '../components/zgl-input/zgl-input.vue'
	import ZglBtn from '../components/zgl-button/zgl-button.vue'
	export default {
		name:'reg',
		props:{},
		data(){
			return {
				username:'',
				password:''
			}
		},
		components:{
			ZglInput,ZglBtn
		},
		mounted(){},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onClickRight(){
				this.$router.push("./login")
			},
			reg(){
				this.$axios({
					url:'/api/reg',
					method:'post',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(res=>{
					// console.log(res);
					if(res.data.err ===0){
							this.$router.push('/login')
					}else{
						alert("账号已存在")
					}
					
				})
			}
		}
	}
</script>

<style scoped>
	.zgk-user{
		margin: 0 auto;
		width: 100%;
		height: 3.44rem;
	}
	.box{
		height: 200px;
		margin-bottom: 100px;
	}
	img{
		width: 100%;
		height: 100%;
	}
	van-nav-bar{
		width: 200px;
		border: 1px solid #ccc;
	}
</style>
