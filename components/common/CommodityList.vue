<template>
	<view class="commodity-list">
		<commodity :dateList="commodityList"></commodity>
	</view>
</template>

<script>
	import commodity from './Commodity.vue'
	export default {
		data() {
			return {
				commodityList:[
					{
						id: 1,
						imgurl:"../../static/img/local-banner.png",
						name:"爆款珍惜极限商品，你值得拥有",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id: 2,
						imgurl:"../../static/img/local-banner.png",
						name:"爆款珍惜极限商品，你值得拥有",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id: 3,
						imgurl:"../../static/img/local-banner.png",
						name:"爆款珍惜极限商品，你值得拥有",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id: 4,
						imgurl:"../../static/img/local-banner.png",
						name:"爆款珍惜极限商品，你值得拥有",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					
				]
					
				
			}
		},
		components:{
			commodity
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
