<template>
	<view class="content">
		<my-search :isAddress='true' placeholder='不要提' @addressClick='addressClick' @searchClick='searchClick'></my-search>
		<MyUQRCode/>
	</view>
</template>

<script setup>
	import MySearch from '../../components/MySearch.vue'
	import MyUQRCode from '../../components/UQRCode.vue'
	
	const searchClick = e => {
		console.log('searchClick>>>>>',e);
	}
	const addressClick = e => {
		console.log('addressClick>>>>>>>>>>',e);
	}
</script>

<style>
	
</style>


