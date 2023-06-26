<template>

	<!--  -->
	<MyHeader :leftLogo='true'>

	</MyHeader>
	<view class="`">
		<view class="title">
			定位功能
		</view>
		<view @click="getMapLocation" style="margin-left: 16rpx;">
			{{address}}
		</view>
	</view>

	<!-- 搜索框  isAddress 是否需要定位功能-->
	<view class="`">
		<view class="title">
			搜索框
		</view>
		<MySearch :isAddress='false'></MySearch>

	</view>

	<view class="">
		<view class="title">
			搜索框2
		</view>
		<MySearch :isAddress='true'></MySearch>
	</view>
	<!-- 上传图片 numberData 最大上传数量 -->
	<view class="">
		<view class="title">
			上传图片(长按拖动删除)
		</view>
		<MyUploadImg :numberData='9' :isUploadImgStyle='true'></MyUploadImg>
	</view>
	<view class="">
		<view class="title">
			上传图片
		</view>
		<MyUploadImg :numberData='9' :isUploadImgStyle='false'></MyUploadImg>
	</view>
	<!-- 时间选择器 -->
	<view class="">
		<view class="title">
			时间选择器
		</view>
		<MyTimeProp></MyTimeProp>
	</view>
	<!-- 二维码 -->
	<view class="">
		<view class="title">
			二维码
		</view>
		<canvas id="qrcode" canvas-id="qrcode" style="width: 200px;height: 200px;"></canvas>
	</view>
	
	<view class="" style="" @click="login">
		登陆
	</view>
</template>
<script setup>
	import {
		ref,
		computed,
		watch
	} from 'vue'
	import {
		onShow,
		onHide,
		onReady
	} from '@dcloudio/uni-app'
	import UQRCode from 'uqrcodejs'
	onReady(() => {
		// 获取uQRCode实例
		var qr = new UQRCode();
		// 设置二维码内容
		qr.data = "aa";
		// 设置二维码大小，必须与canvas设置的宽高一致
		qr.size = 200;
		// 调用制作二维码方法
		qr.make();
		// 获取canvas上下文
		var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
		// 设置uQRCode实例的canvas上下文
		qr.canvasContext = canvasContext;
		// 调用绘制方法将二维码图案绘制到canvas上
		qr.drawCanvas();

	})
	// 导入组件 - start
	import MyHeader from "../../components/MyHeader.vue"
	import MyUploadImg from "../../components/MyUploadImg.vue"
	import MySearch from "../../components/MySearch.vue"
	import MyTimeProp from "../../components/MyTimeProp.vue"

	// 导入组件 -ends
	import {
		getMapLocation
	} from "../../common/common.js"
	import { 
		GlobalStore
	} from "../../store/index.js"

	function login() {
		uni.navigateTo({
			url: '../components/login/index'
		})
	}
	const store = GlobalStore()
	watch(address, (count) => {
		console.log(`count is: ${count}`)
	})
	const address = computed(() => {
		return store.address
	})

	function searchEvent(e) {
		console.log('searchEvent', e);
	}
	defineExpose({
		getMapLocation,
		login
	})
</script>
<style lang="scss" scoped>
	.title {
		margin: 20rpx 16rpx;
	}
</style>