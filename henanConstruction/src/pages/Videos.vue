<!--视频 主页面-->
<template>
  <div class="videos">
    <header>视频<i class="el-icon-search" @click="seach"></i></header>
    <main>
    	<bscroll>
    		<video-child v-for="(item,index) in filmsList" :item="item" :key="index"></video-child>
    	</bscroll>
    </main>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import videoChild from '@/components/VideoChild'
export default {
  name: 'Videos',
  components: { videoChild },
  data () {
    return {
    	
    }
  },
  methods: {
  	seach (){
  		this.$router.push('/search')
  	},
  },
  computed: {...mapState(["filmsList"])},
  mounted (){
  	this.$store.dispatch('getFilmsList');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.videos{
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
