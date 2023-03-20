<template>
	<view class="index">
		
		<scroll-view scroll-x="true" class ="scroll-content" :scroll-into-view="scorllIndex"> 
			<view :id="'top'+index" v-for="(item,index) in topBar" :key="index" class="scroll-item">
				<text :class='topBarIndex===index? "f-active-coo":"f-color"'
								@tap="changeTab(index)">
				{{item.name}}</text>
			</view>
		</scroll-view>
		
		
		<swiper @change="OnchangeTab" :current="topBarIndex"
		 :style="'height:'+clentHeight+'px;'">
			<swiper-item
					v-for="(item,index) in newTopBar" :key="index">
					<view class="home-data">
						<block v-for="(k,i) in item.data" :key="i">
								<index-swiper v-if="k.type==='swiperList'" :dataList="k.data"></index-swiper>
								<recommend v-if="k.type==='recommendList'" :dataList="k.data"></recommend>
								<card cardTitle="猜你喜欢"></card>
								<CommodityList></CommodityList>
						</block>
					</view>
			</swiper-item>
		</swiper>
			
			<!-- <view>
				
				
				<banner></banner>
				<icons></icons>
				<card cardTitle="热销爆品"></card>
				<hot></hot>
				<card cardTitle="推荐商品"></card>
				<shop></shop>
				<card cardTitle="为您推荐"></card>
				<CommodityList></CommodityList> 
				
			</view> -->
	</view>
</template>

<script>
	import indexSwiper from '../../components/index/indexSwiper.vue'
	import recommend from '../../components/index/Recommend.vue'
	import card from '../../components/common/Card.vue'
	import CommodityList from '../../components/common/CommodityList.vue'
	import Commodity from '../../components/common/Commodity.vue'
	import banner from '../../components/index/banner.vue'
	import icons from '../../components/index/Icons.vue'
	import hot from '../../components/index/Hot.vue'
	import shop from '../../components/index/Shop.vue'
	export default {
		data() {
			return {
				scorllIndex:'top0',
				topBarIndex:0,
				clentHeight:0,
				topBar:[],
				newTopBar:[]
			}
		},
		components:{
			indexSwiper,
			recommend,
			card,
			CommodityList,
			Commodity,
			banner,
			icons,
			hot,
			shop
		},
		onLoad() {
			this.__init();
		},
		onReady() {
			let view = uni.createSelectorQuery().select(".home-data");
			view.boundingClientRect(data => {
			 this.clentHeight=1000;  //data.height
			}).exec();
		},
		methods: {
			__init(){
				uni.request({
					url:"http://192.168.0.104:3000/api/index_list/data",
					success: (res) => {
						let data = res.data.data;
						//console.log(res.data.data);
						this.topBar=data.topBar;
						this.newTopBar = this.initDate(data);
						console.log(this.initDate(data));
					}
				})
			},
			initDate(res){
				let arr=[];
				for(let i=0;i<this.topBar.length;i++){
					let obj = {
						data:[]
					}
					if(i==0){
						obj.data=res.data;
					}
					arr.push(obj);
				}
				return arr;
			},
			changeTab(index){
				if(this.topBarIndex===index){
					return ;
				}
				this.topBarIndex=index
				this.scorllIndex='top'+index
			},
			OnchangeTab(e){
				this.changeTab(e.detail.current)
			}
		}
	}
</script>

<style>
.scroll-content{
	width: 100%;
	height: 80rpx;
	white-space: nowrap;
}
.scroll-item{
	display: inline-block;
	padding:10rpx 30rpx;
	font-size: 32rpx;
}
.f-active-coo{
	padding-top: 10rpx;
	color: #49BDFB;
	border-bottom: 6rpx solid;
}
</style>
