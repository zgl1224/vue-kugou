<template>
  <div id="app">
    <ZglCell :songlist="list1"/>
		
		
	
	</div>
</template>

<script>
import ZglCell from './components/zgl-cell/zgl-cell.vue'
export default {
  name: 'App',
	data(){
		return {
			list1:[
				{id:1,title:'大城小爱-王力宏'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'},
				{id:1,title:'Wrap Me In Walker'},
				{id:1,title:'Sold Out-Hawk Nelson'}
			],
		}
	},
	mounted(){
	
	},
	methods:{
		
	},
	components: {
   ZglCell
  }
}
</script>

<style scoped>
	 
</style>
