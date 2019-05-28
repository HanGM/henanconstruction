<template>
  <div class="media">
  	<div class="big" v-if="item.big">
  		<img v-lazy="baseURL + item.big" lazy="loading"/>
  	</div>
    <div class="main" @click="getNews(item.newsId)">
    	<div class="text">
    		<p class="title">{{item.title}}</p>
    		<p class="more">
    			<span>{{item.tag}}</span>
    			<span>时间</span>
    			<span><i class="el-icon-thumb"></i> {{item.thumbNum}}</span>
    			<span><i class="el-icon-chat-dot-square"></i> {{item.discussNum}}</span>
    		</p>
    	</div>
    	<div class="pic">
    		<img v-lazy="baseURL + item.pic" :key="item.pic"/>
    	</div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Media',
  props: {
  	item: {
  		type: Object,
  		default (){
  			return {
  				thumbNum: 10,
  				discussNum: 10
  			}
  		}
  	}
  },
  data () {
    return {
     
    }
  },
  methods: {
  	getNews (id){
  		this.$router.push({name: 'News',params: {id: id}})
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
.media{
	padding: 0.1875rem;
	border-bottom: 0.03125rem solid #ccc;
	.big{
		width: 100%;
		height: 3.75rem;
		margin-bottom: 0.375rem;
	}
	.main{
		width: 100%;
		height: 1.875rem;
		color: #666;
		display: flex;
		justify-content: space-between;
		.text{
			flex-grow: 1;
			margin: 0 0.1875rem;
			.title{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				height: 1rem;
				line-height: 0.5rem;
				font-size: 0.5rem;
			}
			.more{
				height: 0.375rem;
				line-height: 0.375rem;
				font-size: 0.375rem;
				margin-top: 0.375rem;
			}
		}
		.pic{
			flex-shrink: 0;/*让盒子去除flex布局对宽度的影响*/
			width: 2.8125rem;
			height: 1.875rem;
		}
	}
}
</style>
