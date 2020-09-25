<template>
  <div id="app">
    <ZglCell1 :data="list" />
		
		
	
	</div>
</template>

<script>
import ZglCell1 from './components/zgl-cell1/zgl-cell1.vue'
export default {
  name: 'App',
	data(){
		return {
			list:[
				{id:1,title:'酷狗飙升榜', img:'http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg'},
				{id:2,title:'酷狗TOP榜', img:'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg'},
				{id:3,title:'网络红歌榜', img:'http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg'},
				{id:4,title:'华语新歌榜', img:'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg'},
				{id:5,title:'欧美新歌榜', img:'http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg'},
				{id:6,title:'粤语新歌榜', img:'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg'},
				{id:7,title:'BGM飙升榜', img:'http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg'},
				{id:8,title:'抖音热歌榜', img:'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg'},
				{id:9,title:'酷狗飙升榜', img:'http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg'},
				{id:8,title:'抖音热歌榜', img:'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg'},
				{id:9,title:'酷狗飙升榜', img:'http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg'},
				{id:8,title:'抖音热歌榜', img:'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg'},
				{id:9,title:'酷狗飙升榜', img:'http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg'}
			
			],
		}
	},
	mounted(){
	
	},
	methods:{
		
	},
	components: {
   ZglCell1
  }
}
</script>

<style scoped>
	 
</style>
