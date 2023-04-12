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
				
				<scroll-view scroll-y="true" :style="'height:'+clentHeight+'px;'" @scrolltolower=loadMore(index)>
				<!-- 	<view class="home-data"> -->
				<block v-if="item.data.length>0">										
					<block v-for="(k,i) in item.data" :key="i">
						
							<!-- 首页推荐 -->
							<index-swiper v-if="k.type==='swiperList'" :dataList="k.data"></index-swiper>
							<template v-if="k.type==='recommendList'">
								<recommend  :dataList="k.data"></recommend>
								<card cardTitle="猜你喜欢"></card>
							</template>
							
							<!-- 运抵户外以及其他 -->
							<banner v-if="k.type==='bannerList'" :dataList="k.imgUrl"></banner>
							
							<template v-if="k.type==='iconsList'" >
								<icons :dataList="k.data"></icons>
								<card cardTitle="热销爆品"></card>
							</template>
							
							<template v-if="k.type==='hotList'" >
								<hot :dataList="k.data"></hot>
								<card cardTitle="推荐商品"></card>
							</template>
							
							<template v-if="k.type==='shopList'" >
								<shop :dataList="k.data"></shop>
								<card cardTitle="为您推荐"></card>
							</template>
							
							<CommodityList v-if="k.type==='commodityList'" :dataList="k.data"></CommodityList>
					
					
					
					</block>
				
				
				
				</block>
				
				<view v-else>
					暂无数据
				</view>
						
					<view class="load-text f-color" >
						{{item.loadText}}
					</view>
				</scroll-view>
					
					
			</swiper-item>
		</swiper>
			
	</view>
</template>

<script>
	import $http from '../../common/api/request.js'
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
			
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight=res.windowHeight-uni.upx2px(80)-this.getClientHeight();
				}
			})
		},
		onNavigationBarButtonTap(e) {
			if(e.float=='left'){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		},
		methods: {
			//请求数据
			__init(){
				$http.request({
					url:"/index_list/data"
				}).then((res)=>{
					this.topBar=res.topBar;
					this.newTopBar = this.initDate(res);
				}).catch(()=>{
					uni.showToast({
						title:"请求失败",
						icon:'none'
					})
				})
			},
			//添加数据
			initDate(res){
				let arr=[];
				for(let i=0;i<this.topBar.length;i++){
					let obj = {
						data:[],
						load:"first",
						loadText: "上拉加载更多...."
					}
					if(i==0){
						obj.data=res.data;
					}
					arr.push(obj);
				}
				return arr;
			},
			//顶栏的滑动
			changeTab(index){
				if(this.topBarIndex===index){
					return ;
				}
				this.topBarIndex=index
				this.scorllIndex='top'+index
				
				//每次滑动赋值first
				if(this.newTopBar[this.topBarIndex].load ==='first'){
					this.addDate();
				}
			},
			//页面的对应滑动
			OnchangeTab(e){
				this.changeTab(e.detail.current)
			},
			//可视区域高度【兼容】
			getClientHeight(){
				const res = uni.getSystemInfoSync();
				//console.log(res.platform,res.statusBarHeight);
				const system = res.platform;
				if(system ==='ios'){
					return 2+res.statusBarHeight;   //res.statusBarHeight;
				}else if(system==='android'){
					return 0;
				}else{
					return 0;
				}
			},
			//对应的不同数据
			addDate(callback){
				let index = this.topBarIndex;
				let id = this.topBar[index].id;
				
				let page = Math.ceil(this.newTopBar[index].data.length/5)+1;
				
				//请求数据
				$http.request({
					url: `/index_list/${id}/data/${page}`
				}).then((res)=>{
					this.newTopBar[index].data=[...this.newTopBar[index].data,...res]
				}).catch(()=>{
					uni.showToast({
						title:"请求失败",
						icon:'none'
					})
				})
				
				// uni.request({
				// 	url: `http://192.168.0.104:3000/api/index_list/${id}/data/${page}`,
				// 	success: (res) => {
				// 		if(res.statusCode!=200){
				// 			return ;
				// 		}else{
				// 			let data = res.data.data;
				// 			this.newTopBar[index].data=[...this.newTopBar[index].data,...data];
				// 			console.log(this.newTopBar[index].data);
				// 			//console.log(newTopBar[1].data);
				// 		}
						 
				// 	}
				// })
				
				this.newTopBar[index].load='last';
				
				if(typeof callback ==='function'){
					callback();
				}
			},
			
			//上拉加载更多
			loadMore(index){
				this.newTopBar[index].loadText='加载中...';
				
				//请求完数据 文字信息更换
				this.addDate(()=>{
					this.newTopBar[index].loadText='上拉加载更多...';
				})
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
.load-text{
	border-top: 2rpx solid #636263 ;
	line-height: 60rpx;
	text-align: center;
}
.iconfont{
	color:#ff770f;
}
</style>
