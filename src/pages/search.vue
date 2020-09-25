<template>
	<div class="zgl-search">
		<h3>zgl-search</h3>
		<van-cell is-link @click="showPopup">展示弹出层</van-cell>
		<van-popup v-model="show">内容</van-popup>
	</div>
</template>
	
<script>
	export default {
		name:'zgl-search',
		props:{},
		data(){
			return {
				show:true
			}
		},
		methods:{
			showPopup(){
				this.show = true
			}
		},
		components:{},
		mounted(){},
	}
</script>

<style>
</style>
