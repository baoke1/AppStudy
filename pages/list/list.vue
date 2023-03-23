<template>
	
	<view>
			<Lines></Lines>
			<view class="list">
				<scroll-view scroll-y="true" class="list-left" :style="'height:'+clentHeight+'px;'">
					<view v-for="i in 50" :key="i" class="left-item" @tap="changeLeftTab(i)">
						<view class="left-name " :class="activeIndex===i?'left-name-active':'left-item'"> {{i}}</view>
						
					</view>
					
				</scroll-view>
				
				<scroll-view scroll-y="true" class="list-right" :style="'height:'+clentHeight+'px;'">
					<view class="right-list">
						<view class="list-title">家纺</view>
						<view class="right-content">
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
						</view>
						
						<view class="list-title">家纺</view>
						<view class="right-content">
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
							<view class="right-item">
								<image src="../../static/logo.png" class="right-img"></image>
								<view class="right-name">毛巾</view>
							</view>
						</view>
						
					</view>
					
				</scroll-view>
			</view>
	</view>
</template>

<script>
	import Lines from '../../components/common/Lines.vue'
	export default {
		data() {
			return {
				clentHeight:0,
				activeIndex:1,
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight=res.windowHeight-this.getClientHeight();
				}
			})
		},
		methods: {
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
			changeLeftTab(i){
				this.activeIndex=i;
			},
		},
		components:{
			Lines
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"../search/search"
			})
		}
	}
</script>

<style scoped>
.list{
		display: flex;
}
.list-left{
	width:200rpx;
}
.list-right{
	flex:1;
	padding-left: 30rpx;
}
.left-item{
	border-bottom: 2rpx solid #ffffff;
	font-size: 28rpx;
	font-weight: bold;
	background-color: #f7f7f7;
}
.left-name{
	padding:30rpx 6rpx;
	text-align: center;
}
.left-name-active{
	border-left:8rpx solid #49BDFB;
	background-color: #FFFFFF;
}
.list-title{
	font-weight: bold;
	padding: 10rpx 0;
}
.right-content{
	display: flex;
	flex-wrap: wrap;
}
.right-item{
	width: 150rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10rpx;
}
.right-name{
	padding:16rpx 0;
}
.right-img{
	width: 150rpx;
	height:150rpx;
}
</style>
