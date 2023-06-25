<template>
	<view class="">
		<canvas id="qrcode" canvas-id="qrcode" style="width: 200px;height: 200px;"></canvas>
	</view>
</template>

<script setup> 
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
		var canvasContext = uni.createCanvasContext('qrcode',this); // 如果是组件，this必须传入
		// 设置uQRCode实例的canvas上下文
		qr.canvasContext = canvasContext;
		// 调用绘制方法将二维码图案绘制到canvas上
		qr.drawCanvas();
	
	})
</script>

<style>
</style>