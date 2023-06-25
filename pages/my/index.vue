<template>
	<view>
		<signature :showCanvas="showCanvas" @closeCanvas="closeCanvas"></signature>
		<u-button @click="sign">签名</u-button>
	</view>
</template>
<script>
import signature from '@/components/MySignatureBox.vue';
export default {
	components: {
		signature
	},
	data() {
		return {
		//打开canvas绘制签名
			showCanvas: false,
			//是否展示操作菜单
			completionSignPath: '' //签名
		}
	},
	methods: {
			//隐藏canvas签名组件
			closeCanvas(e) {
				this.showCanvas = false;
				if (!this.$isEmpty(e)) {
					this.completionSignPath = e
				}
			},
			sign() {
				this.showCanvas = true;
			}
		}
}
</script>
