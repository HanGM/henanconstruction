<template>
	<div class="search">
		<header>搜索<i class="el-icon-arrow-left arrow" @click="$router.back()"></i></header>
		<main>
			<i class="el-icon-arrow-left"></i>
			<input type="text" placeholder="请输入关键词"/>
			<button>搜索</button>
		</main>
	</div>
</template>

<script>
export default {
	name: 'News',
	props: {
		item: {
			type: Object,
			default (){
				return {
					
				}
			}
		}
	},
	data (){
		return {
			text: ''
		}
	},
	methods: {},
	computed: {},
	mounted (){
		
	}
}
</script>

<style scoped lang="less">
.search{
	.fullpage();
	.all();
	header{
		.header();
		i{
			width: 1.5rem;
			left: 0;
		}
	}
	main{
		height: 1.125rem;
		border-bottom: 0.03125rem solid #ccc;
		display:flex;
		justify-content: space-between;
		padding: 0.1875rem;
		i{
			font-size: 0.5rem;
			line-height: 0.75rem;
		}
		input{
			flex-grow: 1;
			margin: 0 0.1875rem;
			border-radius: 0.1875rem;
			border: 0.03125rem solid #ccc;
			outline: none;
			padding:0 0.3125rem;
		}
		button{
			background-color: transparent;
			border-radius: 0.1875rem;
			border: 0.03125rem solid #ccc;
		}
	}
}
</style>