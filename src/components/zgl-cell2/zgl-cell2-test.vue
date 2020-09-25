<template>
  <div id="app">
    <ZglCell2 :data="list" />
	</div>
</template>

<script>
import ZglCell2 from './components/zgl-cell2/zgl-cell2.vue'
export default {
  name: 'App',
	data(){
		return {
			list:[
				{id:1,title:'从此以后，你的世界我不在', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:2,title:'再美好，也终成往事', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:3,title:'放飞自我，明天你好', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:4,title:'盛世华夏，侠客江湖行', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:5,title:'欧美新歌榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:6,title:'粤语新歌榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:7,title:'BGM飙升榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:8,title:'抖音热歌榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:9,title:'酷狗飙升榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:10,title:'抖音热歌榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:11,title:'酷狗飙升榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:12,title:'抖音热歌榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'},
				{id:13,title:'酷狗飙升榜', img:'http://c1.kgimg.com/custom/400/20200731/20200731000648700109.jpg'}
			
			],
		}
	},
	mounted(){
	
	},
	methods:{
		
	},
	components: {
   ZglCell2
  }
}
</script>

<style scoped>
	 
</style>
