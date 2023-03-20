<template>
	<view class="hot">
		<Commodity :dateList="hotList" itemW='250rpx' bigH="250rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default {
		
		data() {
			return {
				hotList:[
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
			Commodity
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
