import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/home.vue';
import Songlist from '../pages/songlist.vue';
import Ranklist from '../pages/ranklist.vue';
import Detail from '../pages/detail.vue';
import User from '../pages/user.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';

let routes = [
	{path:'/home',component:Home},
	{path:'/songlist',component:Songlist},
	{path:'/ranklist',component:Ranklist},
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/user',component:User},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/',redirect:'/home'}
];

let router = new VueRouter({
	routes
});

export default router;