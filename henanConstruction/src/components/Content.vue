<template>
	<bscroll>    
		<div class="content">
			<div class="swiper-container swiper2" ref="swiper2" v-show="$route.meta.showBanner">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="(slider,index) in bannerList" :key="index">
			    	<router-link to="/">
			    		<img class="swiper-lazy" :data-src="slider"/>
			    		<div class="swiper-lazy-preloader"></div>
			    	</router-link>
			    </div>
			  </div>
			<!--<div class="swiper-pagination"></div>-->
			</div>
			<div class="box" v-show="$route.meta.showBanner">
				<p class="tips" v-model="msg">{{msg}}</p>
			</div>
			<media v-for="(item,index) in list" :item="item" :key="index"></media>								
		</div>
	</bscroll>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
export default {
	name: 'Content',
	data (){
		return {
			
		}
	},
	methods: {
		
	},
	computed: {
		...mapState(['msg','bannerList']),
		list(){
			var tag = this.$route.meta.tag;
			return this.$store.state.newsList.filter(v=>v.tag == tag)
		}
	},
	mounted (){
		this.$store.dispatch('getNewsList');
		var swiper2 = new Swiper(this.$refs.swiper2,{
			speed: 500,
			autoplay: 3000,
			loop: true,
			lazyLoading: true,//图片懒加载
			lazyLoadingInPrevNext : true, 
		    lazyLoadingInPrevNextAmount: 1, 
//			pagination : '.swiper-pagination',
	        disableOnInteraction: false,
     		preventLinksPropagation: false   // 阻止点击事件冒泡
		})
	}
}
</script>

<style scoped lang="less">
.content{
	.swiper2{
		height: 3.75rem;
		img{
			display: block;
			width: 100%;
			height: 100%;
		}
	}	
	.box{
		border-bottom: 0.03125rem solid #666;
		.tips{
			color: #D94342;	
			line-height: 0.75rem;
			font-size: 0.4375rem;
			font-weight: bold;
			white-space: nowrap;
			animation: move 12s linear infinite;
		}
	}
}
@keyframes move{
	from{
		transform: translateX(100%);
	}
	to{
		transform: translateX(-150%);
	}
}	
</style>