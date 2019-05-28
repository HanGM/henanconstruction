<!--个人信息详情页myinfo-->
<template>
  <div class="myinfo">
  	<header>
  		<i class="el-icon-arrow-left arrow" @click="$router.push('/mine')"></i>
  		{{myInfo.title}}
  		<i class="el-icon-edit-outline edit" v-if="$route.params.type == 'contribute'" @click="goDetail"></i>
		</header>
		<main>
			<div class="material" v-if="$route.params.type == 'material'">
				<div class="more" v-for="item in materialList" @click="goDetail">
		  		<span>{{item.title}}</span>
		  		<i class="el-icon-arrow-right"></i>
		  	</div>
			</div>
			<div class="collection" v-else-if="$route.params.type == 'collection'"></div>
			<div class="contribute" v-else-if="$route.params.type == 'contribute'">
				<div class="topnav">
					<div v-for="(item,index) in contributeList" :key="index">
						<router-link :to="detail + '/' + item.path">{{item.title}}</router-link>						
					</div>
				</div>
			</div>
			<div class="popularize" v-else-if="$route.params.type == 'popularize'">
				<img src="../assets/img/popularize.png"/>
				<h3 @click="goDetail">分享给好友</h3>
			</div>
			<div class="message" v-else-if="$route.params.type == 'message'">
				<div class="topnav">
					<div v-for="(item,index) in messageList" :key="index">
						<router-link :to="detail + '/' + item.path">{{item.title}}</router-link>
					</div>
				</div>
			</div>
			<div class="setting" v-else="$route.params.type == 'setting'">
				<div class="more" v-for="item in settingList" @click="goDetail">
		  		<i :class="[item.icon,item.color]"></i>
		  		<span>{{item.title}}</span>
		  		<i class="el-icon-arrow-right"></i>
		  	</div>
				<h3 @click="quit">退出</h3>
			</div>
		</main>
		<footer>
			<router-view></router-view>
		</footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'MyInfo',
  data (){
  	return {
  		detail: '',
  		materialList: [{
	      	title: '头像',
	      	type: 'headPic',
	      	main: ''
	     },{
	      	title: '昵称',
	      	type: 'nickName',
	      	main: ''
	     },{
	      	title: '签名',
	      	type: 'sign',
	      	main: 'red'
	     },{
	      	title: '性别',
	      	type: 'sex',
	      	main: '男'
	      },{
	      	title: 'QQ',
	      	type: 'qq',
	      	main: ''
	     },{
	      	title: '真实姓名',
	      	type: 'trueName',
	      	main: ''
	     },{
	      	title: '身份证号',
	      	type: 'IdNum',
	      	main: 'red'
	     },{
	      	title: '工作单位',
	      	type: 'workPlace',
	      	main: ''
	      },{
	      	title: '通讯地址',
	      	type: 'mailAddress',
	      	main: ''
	      }],
  		contributeList: [{
					path: 'draught',
					title: '草稿'
				},{
					path: 'review',
					title: '审核中'
				},{
					path: 'pass',
					title: '已通过'
				},{
					path: 'fail',
					title: '未通过'
				}],
  		messageList: [{
					path: 'discuss',
					title: '评论'
				},{
					path: 'thumb',
					title: '赞'
				},{
					path: 'tips',
					title: '通知'
				}],
  		settingList: [{
	      	icon: 'el-icon-delete',
	      	title: '清除缓存',
	      	type: 'clearcache',
	      	color: 'blue'
	      },{
	      	icon: 'el-icon-refresh',
	      	title: '检查更新',
	      	type: 'checkupdate',
	      	color: 'yellow'
	      },{
	      	icon: 'el-icon-edit-outline',
	      	title: '意见反馈',
	      	type: 'feedback',
	      	color: 'red'
	      },{
	      	icon: 'el-icon-warning-outline',
	      	title: '关于我们',
	      	type: 'aboutus',
	      	color: 'purple'
	      }],
  	}
  },
	methods: {
		goDetail (){
			this.$router.push('/mydetail')
		},
		quit (){
			this.$router.push('/login')
			this.$store.dispatch('quitLogin')
		}
	},
	computed: {
		...mapState(['isLogin','myInfoList']),	
		myInfo (){
			return this.myInfoList.filter(v=>v.type === this.$route.params.type)[0]
		}
	},
	mounted (){
			this.detail = this.$route.path.split('/').splice(0,3).join('/');
	},
	beforeRouteEnter (to, from, next){
		if(to.path === '/myinfo/contribute'){
			next({path:'/myinfo/contribute/draught'})
		}
		if(to.path === '/myinfo/message'){
			next('/myinfo/message/discuss')
		}
		next()
	}
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@keyframes slideup{
	from{transform: translateY(100%);}
	to{transform: translateY(0%);}
}
.myinfo{
	.fullpage();
	.all();
	animation: slideup .3s;
	header{
		.header();
		.arrow{
			width: 1.5rem;
			left: 0;
		}
	}
	main{	
		.topnav{
				display: flex;
				justify-content: space-around;
				div{
					a{
						line-height: 1.125rem;
						padding: 0.1875rem;
						color: #000;
						text-decoration: none;
						border-bottom: 0.0625rem solid transparent;
					}
					.router-link-active{
						font-size: 0.4375rem;
						color: #D94342;
						border-bottom: 0.0625rem solid #D94342;
					}
				}				
			}			
		.more{
			margin:0 0.1875rem;
			height: 1.125rem;
			line-height: 1.125rem;
			font-size: 0.4375rem;
			font-weight: bold;
			border-bottom: 0.03125rem solid #ccc;
			color: #666;
			.blue{
				color: #00A3C6;
			}
			.yellow{
				color: #F9B26C;
			}
			.red{
				color: #D94342;
			}
			.purple{
				color: #909AFD;
			}
			.el-icon-arrow-right{
				float: right;
				line-height: 1.125rem;
			}
		}
		.popularize{
			img{
				display: block;
				width: 100%;
			}
			h3{
				.block();
				font-size: 0.5625rem;
				border-radius: 0.5625rem;
	    	margin: 0.75rem;
	    	background-color: #55C8F8;
	    }
		}
		.setting{
			h3{
				.block();
				font-size: 0.4375rem;
	    	background-color: #D94342;
	    	margin: 0.1875rem;
			}
		}
	}
	footer{
		height: calc(100% - 2.6875rem);
		overflow: hidden;
	}
}
</style>
