<template lang="html">
  <div class="weather">
  	weather
		<p>{{weather}}</p>
		<p>{{recentWeather}}</p>

		<group>
	    <x-textarea title="title" v-model="word"></x-textarea>
	  </group>
  </div>
</template>

<script>
import { XTextarea } from 'vux'
export default {
	data() {
		return {
			weather: '',
			recentWeather: '',
			word: ''
		}
	},
	components: {
		XTextarea
	},
	mounted() {
		this.getWeather();
		this.getRecentWeather();
	},
	methods: {
		getWeather() {
			let _this = this;
			this.$http.get('https://api.seniverse.com/v3/robot/talk.json?key=mtqgpeldccxfifud&q=深圳最近天气')
				.then(res => {
					console.log(res.data);
					this.weather = res.data.results[0].reply.plain;
				})
				.catch(function (error){
					console.log(error);
				})
		},
		getRecentWeather() {
			let _this = this;
			this.$http.get('https://free-api.heweather.com/s6/weather?location=深圳&key=17356dca593346dcb5625c24c29dc3e3')
				.then(res => {
					console.log(res.data);
					this.recentWeather = res.data.results[0].reply.plain;
				})
				.catch(function (error){
					console.log(error);
				})
		}
	}
}
</script>

<style lang="less">
</style>
