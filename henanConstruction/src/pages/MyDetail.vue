<!--个人操作详情页mydetail-->
<template>
  <div class="mydetail">
  	<header>
  		<i class="el-icon-arrow-left arrow" @click="$router.back()"></i>
  		个人操作详情页
		</header>
		<main>
			
		</main>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'MyDetail',
  data (){
  	return {
  	
  	}
  },
	methods: {
		
	},
	computed: {
		...mapState(['isLogin','myInfoList']),
		myInfo (){
			return this.myInfoList.filter(v=>v.type === this.$route.params.type)[0]
		}
	},
	mounted (){
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@keyframes slideup{
	from{transform: translateY(100%);}
	to{transform: translateY(0%);}
}
.mydetail{
	.fullpage();
	.all();
	animation: slideup .3s;
	header{
		.header();
		i{
			width: 1.5rem;
			left: 0;
		}
	}
	main{
		
	}
}
</style>
