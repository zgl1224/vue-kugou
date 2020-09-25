<template>
  <div class="header-logo" :style="{background:bgColor}">
		<div class="contentL" >
			<a href="javascript:;">
				<img src="../../assets/images/logo-kg.png" alt="">
			</a>
		</div>
		<div class="contentR"> 
			<a href="javascript:;">
				<img src="../../assets/images/search.png" alt="">
			</a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'header-logo',
  props: {
    bgColor:{
			type:String,
			default:'#2ca2f9'
		}
  }
}
</script>

<style scoped>
	.header-logo{
		width: 100%;
		height: 60px;
		position: fixed;
		top:0px;
		left:0;
		background: #2ca2f9;
		padding: 10px;
		z-index: 9999;
	}
	.header-logo .contentL{
		height: 30px;
		float: left;
	}
	.header-logo .contentL img{
		height: 100%;
	}
	.contentR{
		float: right;
		height: 30px;
	}
	.contentR img{
		height: 100%;
	}
</style>

