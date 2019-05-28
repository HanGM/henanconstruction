<!--头条 主页面home 搜索页面search 顶部导航切换页面(嵌套路由)content 详情页news-->
<template>
	<div>
		<div class="cover" v-if="selectFlag">
	  		<header>
	  			<i class="el-icon-close" @click="close"></i>
	  		</header>
	    	<main>
	    		<h2>我的频道<button @click="channelFlag">{{!coverFlag ? '编辑' : '完成'}}</button></h2>
	    		<div class="channel">
	    			<div v-for="(item,index) in myList" :key="index" @click="remove(index)">{{item.title}}</div>
	    		</div>
	    		<h2>频道推荐</h2>
	    		<div class="channel">
	    			<div v-for="(item,index) in lastList" :key="index" @click="add(index)">{{item.title}}</div>
	    		</div>
	    	</main>
	  </div>
	  <div class="home">  	
	    <header>中原建设<i class="el-icon-search" @click="seach"></i></header>
	    <div class="topnav">
	    	<div class="swiper-container swiper1" ref="swiper1">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="(slider,index) in myList" :key="index"><router-link :to="slider.path">{{slider.title}}</router-link></div>
				  </div>
				</div>
	    	<i class="el-icon-plus" @click.stop="select"></i>
	    </div>
	    <main>
	    	<router-view></router-view> 	    
	    </main>
	  </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    	coverFlag: false,
    	selectFlag: false,
    	recommendList: [],
    }
  },
  methods: {
  	seach (){
  		this.$router.push('/search')
  	},
  	channelFlag (){
  		this.coverFlag = !this.coverFlag;
  		if(this.coverFlag){
  			
  		}
  	},
  	select (){
  		this.selectFlag = true;
  	},
  	close (){
  		this.selectFlag = false;
  	},
  	remove (i){
  		if(this.coverFlag && i > 0){
  			this.lastList.push(this.myList[i]);
  			this.myList.splice(i,1)
  		}
  	},
  	add (i){
  		if(this.coverFlag){
  			this.myList.push(this.lastList[i]);
  			this.lastList.splice(i,1)
  		}
  	}
  },
  computed: {
  	...mapState(['topnavList']),
  	myList (){
  		return this.topnavList
  	},
  	lastList (){
  		return this.recommendList
  	}
  },
  mounted (){
  	var swiper1 = new Swiper(this.$refs.swiper1,{
		 		slidesPerView: 5,
				speed: 500,
				autoHeight: true, //高度随内容变化
				autoplay: false,
		        disableOnInteraction: false,
         		preventLinksPropagation: false   // 阻止点击事件冒泡
			})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*遮罩层*/
.cover{
	.fullpage();
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 666;
	animation: slideup .5s;
	padding: 0.1875rem;
	header{
		height: 1.5625rem;
		i{
			float: right;
			font-size: 0.5625rem;
			line-height: 1.5625rem;
		}
	}
	main{
		h2{
			font-size: 0.5625rem;
			font-weight: bold;
			height: 1.5625rem;
			line-height: 1.5625rem;
			button{
				padding: 0.09375rem 0.375rem;
				border-radius: 0.4375rem;
				border: 0.03125rem solid #D94342;
				color: #D94342;
				float: right;
				margin-top: 0.375rem;
				background-color: transparent;
			}
		}
		.channel{
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			box-sizing: border-box;
			div{				
				width: 23%;
				margin: 1%;
				border: 0.03125rem solid #ccc;
				border-radius: 0.15625rem;
				height: 1.125rem;
				line-height: 1.125rem;
				text-align: center;
				font-size: 0.4375rem;
			}
		}
	}
}
@keyframes slideup{
	from{transform: translateY(100%);}
	to{transform: translateY(0%);}
}
/*home主页*/
.home{
	height: calc(100% - 1.5625rem);
	.all();
	header{
		.header();
	}
	.topnav{
		width: 100%;
		height: 0.75rem;
		padding: 0 0.1875rem;
		line-height: 0.75rem;
		position: relative;
		text-align: center;
		a{
			font-weight: bold;
			font-size: 0.4375rem;
			text-decoration: none;
			color: #666;
		}
		.router-link-active{
			color: #D94342;
		}
		i{
			position: absolute;
			top: 0;
			right: 0;
			z-index: 6;
			line-height: 0.75rem;
			padding: 0 0.15625rem;
			background: rgba(256,256,256);
		}
	}
	main{
		width: 100%;
		height: calc(100% - 2.3125rem);
	}
}
</style>
