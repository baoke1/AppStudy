<template>
	<view>
		
		<view class="shop-title f-color">
			
			<view class="shop-item" v-for="(item,index) in shopList.data" :key="index" @tap='changeTap(index)'>
				<view :class="shopList.currentIndex===index? 'f-active-coo':''">{{item.name}}</view>
				<view class="shop-icon">
					<view class="iconfont icon-shangjiantou up"
						:class="item.status===1? 'f-active-coo':''"
					></view>
					<view class="iconfont icon-xiajiantou down"
						:class="item.status===2? 'f-active-coo' : ''"
					></view>
				</view>
			</view>
			
		</view>
		<Lines></Lines>
		<CommodityList :dataList="dataList"></CommodityList>
		<!-- :dataList="  " -->
	</view>
</template>

<script>
	import Lines from '../common/Lines.vue'
	import CommodityList from '../../components/common/CommodityList.vue'
	export default {
		props:{
			keyword:String
		}, 
		data() {
			return {
				shopList:{
					currentIndex :0,
					data:[
						{name:'价格',status:1,key:"pprice"},
						{name:'折扣',status:0, key:"discount"},
						{name:'品牌',status:0, key:"pprice"},
					]
				},
				dataList:[
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
		computed:{
			orderBy(){
				let obj = this.shopList.data[this.shopList.currentIndex];
				let val=obj.status==="1"?"desc":"asc";
				return {
					[obj.key]:val
				}
			}
		},
		components:{
			Lines,
			CommodityList
		},
		methods: {
			changeTap(index){
				
				
				
				let idx = this.shopList.currentIndex;
				let item = this.shopList.data[idx];
				if(idx==index){
					return item.status = item.status===1?2:1;
				}
				let newItem = this.shopList.data[index];
				item.status=0;
				this.shopList.currentIndex=index;
				newItem.status=1;
				
			}
		}
	}
</script>

<style>
.shop-title{
	display: flex;
}
	
.shop-item{
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80rpx;
}
.shop-icon{
	position: relative;
	margin-left: 10rpx;
}
.iconfont{
	width:16rpx;
	height:8rpx;
	position: absolute;
	left: 0;
}
.up{
	top:-22rpx;
}
.down{
	top:-7rpx;
}
</style>
