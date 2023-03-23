<template>
	<view class="search">
		<Lines></Lines>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-icon" @tap="clearHistory"></view>
			</view>
			<view v-if="searchdata.length>0">
				<view class="search-name f-color" v-for="(item,index) in searchdata" 
				:key="index" @tap="toSearchList(item)">
					{{item}}
				</view>
			</view>
			<view v-else class="search-end">
				暂无搜索记录
			</view>
		</view>
		
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热门搜索</view>
			</view>
			<view >
				<view class="search-name f-color">四件套</view>
				<view class="search-name f-color">面膜</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import Lines from '../../components/common/Lines.vue'
	export default {
		data() {
			return {
				keyword:'',
				searchdata:[
					
				]
			}
		},
		onLoad() {
			uni.getStorage({
				key:"searchdata",
				success: (res) => {
					this.searchdata=JSON.parse(res.data)
				}
			})
		},
		onNavigationBarButtonTap(e) {
			this.search();
		},
		
		//监听input输入内容
		onNavigationBarSearchInputChanged(e) {
			this.keyword=e.text;
			
		},
		//监听软键盘中的搜索按钮
		onNavigationBarSearchInputConfirmed(e) {
			
			this.search();
		},
		components:{
			Lines
		},
		methods: {
			search(){
				if(this.keyword===''){
					return uni.showToast({
						title:"关键词不能为空",
						icon:"none"
					})
				}else{
					this.toSearchList(this.keyword);
					
				}
				uni.hideKeyboard();
				this.addSearch();
			},
			
			addSearch(){
				let idx = this.searchdata.indexOf(this.keyword);
				if(idx<0){
					this.searchdata.unshift(this.keyword);
				}
				else{
					
					this.searchdata.splice(idx,1);
					this.searchdata.unshift(this.keyword);
				}
				uni.setStorage({
					key:"searchdata",
					data:JSON.stringify(this.searchdata)
				})
			},
			//清除数据
			clearHistory(){
				uni.showModal({
					title:"重要提示",
					content:"是否要清除数据",
					cancelText:"取消",
					confirmText:"确定",
					success: (res) => {
						if(res.confirm){
							this.searchdata='';
							uni.removeStorage({
								key:"searchdata"
							});
						}
					}
				})
			},
			toSearchList(item){
				uni.navigateTo({
					url:"../search-list/search-list?keyword="+item+""
				})
			},
		}
	}
</script>

<style>
.search-item{
	padding:20rpx;
	
}
.search-title{
	display: flex;
	justify-content: space-between;
}
.search-name{
	padding: 4rpx 24rpx;
	background-color: #e1e1e1;
	display: inline-block;
	border-radius: 26rpx;
	margin: 10rpx;
}
.search-end{
	text-align: center;
	font-size: 15rpx;
}
</style>
