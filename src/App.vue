<template>
  <div id="app">
		<Loading v-if="$root.loading"></Loading>
		<HeaderLogo v-if="$root.logo"></HeaderLogo>
		<router-view ></router-view>
		<ZglToolbar ></ZglToolbar>
	</div>
</template>

<script>
import HeaderLogo from './layout/zgl-header-logo.vue'
import Loading from './components/zgl-loading/zgl-loading.vue'
import ZglToolbar from './layout/zgl-toolbar.vue'
export default {
  name: 'App',
	data(){
		return {
		}
	},
	mounted(){
	},
	methods:{
	},
	components: {
	 HeaderLogo,ZglToolbar,Loading
  },
	watch:{
		$route:{
			handler(newVal){
				let path = newVal.path;
				// console.log(path);
				if(/home|ranklist|songlist/.test(path)){
					this.$root.logo = true;
				}
				if(/user|detail/.test(path)){
					this.$root.logo = false;
				}
				if(/login|reg/.test(path)){
					this.$root.logo = false;
					this.$root.loading=false;
				}
			},
			immediate:true
		}
	},
}
</script>
<style scoped>
</style>
