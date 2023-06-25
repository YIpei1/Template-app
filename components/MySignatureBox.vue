<template>
	<view class="signature-box">
		<!-- 签名 -->
		<view class="signature" v-show="showCanvas">
			<canvas class="mycanvas" canvas-id="mycanvas" @touchstart="touchstart" @touchmove="touchmove"
				@touchend="touchend"></canvas>
			<view class="footer">
				<u-button @click="finish" type="primary" :plain="true" :ripple="true" ripple-bg-color="#909399">保存
				</u-button>
				<u-button @click="clear" type="warning" :plain="true" :ripple="true" ripple-bg-color="#909399">清除
				</u-button>
				<u-button @click="close" type="error" :plain="true" :ripple="true" ripple-bg-color="#909399">关闭
				</u-button>
			</view>
		</view>
		<!-- 签完名后生成的图片 -->
		<view v-show="SignatureImg" class="SignatureImg">
			<image :src="SignatureImg" mode=""></image>
		</view>
		<!-- 清除签完名后生成的图片 -->
		<u-button v-show="SignatureImg" @click="obliterate" type="error" :plain="true" :ripple="true"
			ripple-bg-color="#909399" size="medium">清除签名</u-button>
	</view>
</template>
<script>
	import { pathToBase64 } from '@/common/jssdk_image_tools.js'
	var x = 20;
	var y = 20;
	export default {
		data() {
			return {
				//绘图图像
				ctx: '',
				//路径点集合
				points: [],
				//签名图片
				SignatureImg: '',
				hasSign: false
			};
		},
		props: ['showCanvas'],
		methods: {
			//清除签名的图片
			obliterate() {
				if (this.SignatureImg) {
					this.SignatureImg = '';
				}
				this.close();
			},
			//关闭并清空画布
			close() {
				this.$emit('closeCanvas');
				this.clear();
			},
			//创建并显示画布
			createCanvas() {
				this.ctx = uni.createCanvasContext('mycanvas', this); //创建绘图对象
				this.ctx.setFillStyle('#000000')
				this.ctx.fillStyle = '#000000'
				//设置画笔样式
				this.ctx.lineWidth = 4;
				this.ctx.lineCap = 'round';
				this.ctx.lineJoin = 'round';
				console.log(this.ctx)
			},
			//触摸开始，获取到起点
			touchstart(e) {
				let startX = e.changedTouches[0].x;
				let startY = e.changedTouches[0].y;
				let startPoint = {
					X: startX,
					Y: startY
				};
				this.points.push(startPoint);
				//每次触摸开始，开启新的路径
				this.ctx.beginPath();
			},
			//触摸移动，获取到路径点
			touchmove(e) {
				let moveX = e.changedTouches[0].x;
				let moveY = e.changedTouches[0].y;
				let movePoint = {
					X: moveX,
					Y: moveY
				};
				this.points.push(movePoint); //存点
				let len = this.points.length;
				if (len >= 2) {
					this.draw(); //绘制路径
				}
			},
			// 触摸结束，将未绘制的点清空防止对后续路径产生干扰
			touchend() {
				this.points = [];
			},
			//绘制笔迹
			draw() {
				let point1 = this.points[0];
				let point2 = this.points[1];
				this.points.shift();
				this.ctx.moveTo(point1.X, point1.Y);
				this.ctx.lineTo(point2.X, point2.Y);
				this.ctx.stroke();
				this.ctx.draw(true);
				this.hasSign = true
			},
			//清空画布
			clear() {
				this.hasSign = false
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						let canvasw = res.windowWidth;
						let canvash = res.windowHeight;
						that.ctx.clearRect(0, 0, canvasw, canvash);
						that.ctx.draw(true);
					}
				});
			},
			//完成绘画并保存到本地
			finish() {
				if (!this.hasSign) {
					uni.showToast({
						title: '签名为空不能保存',
						icon: 'none',
						duration: 2000
					})
					return
				}
				let that = this;
				uni.canvasToTempFilePath({
						canvasId: 'mycanvas',
						success: function(res) {
							if(!res || !res.tempFilePath) {
								console.log(res.tempFilePath);
								that.SignatureImg = res.tempFilePath;
								that.$emit('closeCanvas', that.SignatureImg);
								that.close();
							}else{
								//用来解决安卓真机获取到的是canvas图片的临时路径，转成base64格式
								pathToBase64(res.tempFilePath).then(re => {
									console.log(re);
									that.SignatureImg = re;
									that.$emit('closeCanvas', that.SignatureImg);
									that.close();
								})
							}
						}
					}
				);
			}
		},
		mounted() {
			this.createCanvas();
		}
	};
</script>
<style lang="less" scoped>
	.signature-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #fff;
		// height: calc(100vh-44rpx);
		//签名模块
		.signature {
			position: fixed;
			top: 10px;
			left: 2%;
			z-index: 999;
			width: 96%;
			//canvas
			.mycanvas {
				width: 100%;
				// height: calc(100vh - 200upx);
				height: calc(100vh - 180rpx);
				background-color: #fff;
				border-radius: 10px 10px 0 0;
			}
			//底部按钮
			.footer {
				font-size: 14px;
				height: 150upx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: #fff;
				border-radius: 0 0 10px 10px;
				border-top: 1px solid #a7a7a733;
			}
		}
		//生成的图片
		.SignatureImg {
			image {
				width: 750rpx;
				height: 750rpx;
			}
		}
	}
</style>