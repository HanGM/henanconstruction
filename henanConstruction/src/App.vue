<template>
  <div id="app">
  	<transition name="move">
    	<router-view/>
    </transition>
    <nav class="buttom-nav" v-show="!$route.meta.isShow">
    	<div v-for="nav in navList">
	    	<router-link :to="nav.path">
	    		<i :class="nav.icon"></i>
	    		<p>{{nav.title}}</p>
	    	</router-link>
	    </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'App',
  data (){
  	return {
  		navList: [{
  			path: '/home',
  			icon: 'el-icon-house',
  			title: '头条'
  		},{
  			path: '/recommend',
  			icon: 'el-icon-thumb',
  			title: '推荐'
  		},{
  			path: '/videos',
  			icon: 'el-icon-video-camera',
  			title: '视频'
  		},{
  			path: '/mine',
  			icon: 'el-icon-user',
  			title: '我的'
  		}]
  	}
  }
}
</script>

<style lang="less">
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.el-notification{
	width: 9rem;
}
#app {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
	.move-enter-active, .move-leave-active {
		  transition: all .5s;
		}
	.move-enter, .move-leave-to {
		  transform: translateX(-100%);
		  opacity: 0;
		}
	.buttom-nav{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1.5625rem;
		display: flex;
		justify-content: space-around;
		text-align: center;
		background-color: #f1f1f1;
		div{
			margin-top: 0.09375rem;
			a{
				text-decoration: none;
				color: #666;
				i{
					font-size: 0.875rem;
				}
				p{
					font-size: 0.375rem;
				}
			}
			.router-link-active{
				color: #D94342;
			}			
		}		
	}
	.el-input__inner,.el-button{
		color: #fff;
		background:transparent;
		border: 0.03125rem solid #ccc;
	}
	.el-divider--horizontal{
		margin: 0.1875rem 0;
	}
}
</style>
