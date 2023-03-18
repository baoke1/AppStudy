<template>
	<view class="index">
			<view class="f-active-coo">文字</view>
			<view class="iconfont icon-xiaoxi"> 出现</view>
			<view>
				<index-swiper></index-swiper>
				<recommend></recommend>
				<card cardTitle="猜你喜欢"></card>
				<CommodityList></CommodityList>
			</view>
	</view>
</template>

<script>
	import indexSwiper from '../../components/index/indexSwiper.vue'
	import recommend from '../../components/index/Recommend.vue'
	import card from '../../components/common/Card.vue'
	import CommodityList from '../../components/common/CommodityList.vue'
	import Commodity from '../../components/common/Commodity.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			indexSwiper,
			recommend,
			card,
			CommodityList,
			Commodity
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
