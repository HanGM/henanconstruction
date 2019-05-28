<!--推荐 主页面-->
<template>
  <div class="recommend">
   <header>推荐<i class="el-icon-search" @click="seach"></i></header>
   <main>
   	<bscroll>
   		<media v-for="(item,index) in list" :item="item" :key="index"></media>
   	</bscroll>
   </main>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      
    }
  },
  methods: {
  	seach (){
  		this.$router.push('/search')
  	},
  },
  computed: {
		list(){
			var thumbNum = this.$route.meta.thumbNum;
			return this.$store.state.newsList.filter(v=>v.thumbNum > thumbNum)
		}
	},
	mounted (){
		this.$store.dispatch('getNewsList')
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.recommend{
	.all();
	height: calc(100% - 1.5625rem);
	header{
		.header();
	}
	main{
		height: calc(100% - 1.5625rem);
	}
}
</style>
