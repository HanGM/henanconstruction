<template>
	<div class="news">
		<header>正文<i class="el-icon-arrow-left arrow" @click="$router.back()"></i>
			<i class="el-icon-more more"></i>
			<i class="el-icon-share share"></i>
		</header>
		<main>
			<bscroll>
				<div class="videosDetail">
					<video :src="baseURL + item.src" width="100%" controls>该浏览器不支持</video>
				</div>
			</bscroll>
		</main>
		<footer>
			<input type="text" id="discuss" v-model="text" placeholder="写评论"/>
			<i class="el-icon-star-off" @click="store(item)"></i>
			<i class="el-icon-thumb" @click="publish(item)"></i>
		</footer>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'News',
	data (){
		return {
			text: ''
		}
	},
	methods: {
		store (item){
			if(this.isLogin){
				var id = item.filmsId;
			}else{
				this.$router.push('/login')
			}			
		},
		publish (item){
			if(this.isLogin){
				var id = item.filmsId;
			}else{
				this.$router.push('/login')
			}
		}
	},
	computed: {
		...mapState(['isLogin','filmsList']),
		item (){
			return this.filmsList.filter(v=>v.filmsId == this.$route.params.id)[0]
			}
	},
	mounted (){
		this.$store.dispatch('changeLogin');
		this.$store.dispatch('getFilmsList');
	}
}
</script>

<style scoped lang="less">
.news{
	.fullpage();
	.all();
	header{
		width: 100%;
	    height: 0.9375rem;
	    height: 30px;
	    color: #fff;
	    background-color: #D94342;
	    line-height: 0.9375rem;
	    text-align: center;
	    font-size: 0.5625rem;
	    position: relative;
	    i{
	        position: absolute;
	        top: 0;
	        line-height: 0.9375rem;
	        padding: 0 0.1875rem;
	    }
	    .arrow{
	    	left: 0;
	    }
	    .more{
	    	right: 0.9375rem;
	    	transform: rotate(90deg);
	    }
	    .share{
	    	right: 0;
	    }
	}
	main{
		height: calc(100% - 1.6875rem);
		padding: 0 0.1875rem;
		.newsDetail{
			h3{
				font-size: 0.5rem;
				font-weight: bold;
				height: 0.75rem;
				line-height: 0.75rem;
				text-align: center;
			}
			.more{
				display: flex;
				justify-content: space-between;
				font-size: 0.375rem;
				height: 0.5rem;
				line-height: 0.5rem;
			}
			.pic{
				height: 1.875rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.small{
				margin: 0.3125rem 0;
				width: 2rem;
				height: 0.5rem;
				line-height: 0.5rem;
				text-align: center;
				border-radius: 0.25rem;
				color: #fff;
				background-color: #FF5F6E;
			}
			.discuss{
				height: 1.875rem;
			}
		}
	}
	footer{
		width: 100%;
		height: 0.75rem;
		padding: 0.09375rem 0.1875rem;
		background-color: #f1f1f1;
		position: absolute;		
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		input{
			flex-grow: 1;
			border-radius: 0.1875rem;
			border: 0.03125rem solid #ccc;
			outline: none;
			padding:0 0.3125rem;
		}
		i{
			font-size: 0.4375rem;
			line-height: 0.5625rem;
			margin-left: 0.1875rem;
		}
	}
}
</style>