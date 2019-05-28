<template>
  <div class="video-child" @click="getFilms(item.filmsId)">
  	<div class="title">{{item.title}}</div>
  	<div class="cover">
  	<img v-lazy="baseURL + item.cover" alt="" />
  	<i class="el-icon-caret-right play"></i>
  	</div>
  	<div class="more">
  		<span><i class="el-icon-view"></i> {{item.lookNum}}</span>
    	<span><i class="el-icon-chat-dot-square"></i> {{item.discussNum}}</span>
    	<i class="el-icon-more"></i>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'videoChild',
  props: {
  	item: {
  		type: Object,
  		default (){
  			return {
  				title: '我是标题',
  				pic: require('@/assets/img/big01.png')
  			} 			
  		}
  	}
  },
  data () {
    return {
     
    }
  },
  methods: {
  	getFilms (id){
  		this.$router.push({name: 'Films',params: {id: id}})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img{
		display: block;
		width: 100%;
		height: 100%;
	}
.video-child{
	overflow: hidden;
	margin-bottom: 0.1875rem;
	border-bottom: 0.03125rem solid #ccc;
	font-size: 0.375rem;
	.title,.more{
		padding: 0 0.1875rem;
		height: 0.75rem;
		line-height: 0.75rem;
	}
	.cover{
		width: 100%;
		height: 5.625rem;
		position: relative;
		.play{
			font-size: 1.5rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			background: rgba(0,0,0,.4);
			border-radius: 50%;
		}	
	}
	.more{
		span{
			margin-right: 0.3125rem;
		}
		.el-icon-more{
			float: right;
			line-height: 0.75rem;
		}
	}
}
</style>
