<template>
  <div id="app">
    <ZglBanner :data="list"/>
		
		
	
	</div>
</template>

<script>
import ZglBanner from './zgl-banner.vue'

export default {
  name: 'App',
	data(){
		return {
			list:[
				{id:1,img:'http://imge.kugou.com/mobilebanner/20200407/20200407002420495175.jpg'},
				{id:2,img:'http://imge.kugou.com/mobilebanner/20200407/20200407002325623540.jpg'},
				{id:3,img:'http://imge.kugou.com/mobilebanner/20200407/20200407002436824510.jpg'}
				// {id:1,img:'./images/111.jpg'},
				// {id:2,img:'./images/111.jpg'},
				// {id:3,img:'./images/111.jpg'}
			]
		}
	},
	mounted(){
	
	},
	methods:{
		
	},
	components: {
   ZglBanner
  }
}
</script>

<style scoped>
	 
</style>
