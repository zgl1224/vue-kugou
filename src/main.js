import Vue from 'vue'
import App from './App.vue'
// import App from './pages/search-test.vue'
// import App from './components/zgl-banner/zgl-banner-test.vue'

import './assets/css/base.css';
import './assets/js/font.js';

import Vant from 'vant';
import 'vant/lib/index.css';

import './plugins/axios'

import router from './plugins/router.js'

Vue.use(Vant);

// import { Swipe, SwipeItem , Cell, CellGroup } from 'vant';

// Vue.use(Swipe);
// Vue.use(SwipeItem);

// Vue.use(Cell);
// Vue.use(CellGroup);

Vue.config.productionTip = false

var vm = new Vue({
	router,
  render: h => h(App),
	data:{
		logo:true,
		loading:true
		
	}
}).$mount('#app')

export default vm;