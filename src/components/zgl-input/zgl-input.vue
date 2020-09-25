<template>
	<div class="zgl-input">
		<!-- <van-cell-group style="margin-left:38px;"> -->
			
			<input :type="type"
			:style="{'padding-left': label ? '1.24rem' : '0.24rem'}"
			:value="value"
			@input="$emit('input',$event.target.value)"/>
			<span v-if="label">{{label}}</span>
			
			
			
			
			<!-- <van-field  
			label="账号" 
			v-model="username"
			type="type" 
			placeholder="请输入账号" 
			style="width:300px;border-bottom: 1px solid #ccc;background: #f3f3f3;margin-left: 40px;"
			@change.native=""
			/>
			
			<van-field
			label="密码" 
			v-model="password"
			type="type" 
			placeholder="请输入密码" 
			style="width:300px;border-bottom: 1px solid #ccc;background: #f3f3f3;margin-left: 40px;"/>
			 -->
			
			
			<!-- <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" style="width:300px;border-bottom: 1px solid #ccc;background: #f3f3f3;"/> -->
			
			
			
			
			
			
			<!-- <van-field v-model="username" label="账号" placeholder="请输入用户名" style="width:300px;border-bottom: 1px solid #ccc;background: #f3f3f3;"/>
			<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" style="width:300px;border-bottom: 1px solid #ccc;background: #f3f3f3;"/> -->
		<!-- </van-cell-group> -->
		
	</div>
</template>
	
<script>
	export default {
		name:'zgl-input',
		data(){
			return {
			
			}
		},
		props:{
			label:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'账号'
			},
			placeholder:{
				type:String,
				default:''
			},
			value:{
				type:String,
				default:''
			}
		},

		components:{},
		mounted(){},
		methods:{}
	}
</script>

<style scoped>
	.zgl-input {
	  border-bottom:1px solid #e5e7e8;
	  position: relative;
	  height: 0.95rem;
		width: 300px;
		margin-left: 35px;
	}
	.zgl-input input{
	  padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;
	}
	.zgl-input span{
	  width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;
	}
</style>
