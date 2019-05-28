<template>
	<div class="wrapper" ref="wrapper">
		<div class="wrap">
			<slot></slot>
		</div>
	</div>
	<!--<div>
	  <div class="wrapper" ref="wrapper">
		<div class="wrap">
		  <div class="top-tip">
		  	<span class="refresh-hook">{{pulldownMsg}}</span>
		  </div>
			<slot></slot>
		  <div class="bottom-tip">
		  	<span class="loading-hook">{{pullupMsg}}</span>
		  </div>
		</div>
	  </div>
	  <div class="alert-hook" :style="{display: alertHook}">刷新成功</div>
	</div>-->
</template>
<!--组件模板添加插槽以便全局应用
	在vue的组件使用插件时可以添加ref属性，避免组件加载与插件功能实现发生冲突
-->
<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Bscroll',
		data (){
			return {
//				pulldownMsg: '下拉刷新',
//				pullupMsg: '加载更多',
//				alertHook: 'none'
			}	
		},
		methods: {
			refreshalert (){
				this.alertHook = 'block';
			},
		},
		mounted (){//组件挂载后，延时调用插件功能，避免BUG
			setTimeout(()=>{
				new BScroll(this.$refs.wrapper,{
					//此处的原DOM节点换成vue中的虚拟DOM节点
					click:true,//better-scroll默认取消区域内点击行为，需设置click:true,
				})
			},10);
		}
	}
</script>
<!--视口高度固定，并且超出隐藏-->
<style scoped lang="less">
	.wrapper{
		height: 100%;
		overflow: hidden;
		position: relative;	
	}
	/*.top-tip{
		position: absolute;
		top: -1.25rem;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		text-align: center;
		color: #666;
	}
	.bottom-tip{
		position: absolute;
		bottom: -1.25rem;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		text-align: center;
		color: #666;
		background-color: #f1f1f1;
	}
	.alert-hook{
		display: none;
		position: fixed;
		top: 2.3125rem;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		text-align: center;
		color: #666;
		background-color: rgba(7,17,27,0.5);
	}*/
</style>