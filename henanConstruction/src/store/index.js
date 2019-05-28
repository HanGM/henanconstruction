import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {},
	state: {
		isLogin: false,
		myInfoList: [{
	      	icon: 'el-icon-postcard',
	      	title: '我的资料',
	      	type: 'material',
	      	color: 'blue'
	      },{
	      	icon: 'el-icon-star-off',
	      	title: '我的收藏',
	      	type: 'collection',
	      	color: 'red'
	      },{
	      	icon: 'el-icon-edit-outline',
	      	title: '我的投稿',
	      	type: 'contribute',
	      	color: 'blue'
	      },{
	      	icon: 'el-icon-s-grid',
	      	title: '我的推广',
	      	type: 'popularize',
	      	color: ''
	      },{
	      	icon: 'el-icon-bell',
	      	title: '消息通知',
	      	type: 'message',
	      	color: 'red'
	      },{
	      	icon: 'el-icon-setting',
	      	title: '设置',
	      	type: 'setting',
	      	color: 'blue'
	      }],
		topnavList: [{
	      	title: '中原头条',
	      	path: 'headline',
	      },{
	      	title: '政策法规',
	      	path: 'policy'
	      },{
	      	title: '城乡规划',
	      	path: 'cityplan'
	      },{
	      	title: '城乡建设',
	      	path: 'cityconstruction'
	      },{
	      	title: '城市管理',
	      	path: 'citymanagement'
	      },{
	      	title: '房产管理',
	      	path: 'propertymanagement'
	      },{
	      	title: '传统村落',
	      	path: 'traditionalvillages'
	      },{
	      	title: '住房基金',
	      	path: 'housingfund'
	      },{
	      	title: '企业风采',
	      	path: 'corporate'
	      },{
	      	title: '生活养生',
	      	path: 'health'
	      }],
	    msg: '"寻找河南最美的传统村落"大型新闻文化主题活动诚邀您积极参与!',
		bannerList: [require('@/assets/img/banner01.png'),require('@/assets/img/banner02.png'),require('@/assets/img/banner03.png'),require('@/assets/img/banner04.png'),require('@/assets/img/banner05.png')],
		filmsList: [],
		newsList: [],
	},
	mutations: {
		changeLogin (state,data){
			state.isLogin = data;
		},
		quitLogin (state,data){
			state.isLogin = data;
		},
		getNewsList (state,data){
			state.newsList = data;
		},
		getFilmsList (state,data){
			state.filmsList = data;
		}
	},
	actions: {
		changeLogin ({commit}){
			axios.post('/henan/user?action=getUserInfo').then(res=>{
				if(res.data.code == 200){
					console.log(res.data.success)
					commit('changeLogin',true)
				}else{
					commit('changeLogin',false)
				}
			})
		},
		quitLogin ({commit}){
			axios.post('/henan/user?action=quit').then(res=>{
				if(res.data.code == 200){
					commit('quitLogin',false)
				}else{
					this._vm.$message.error(res.data.err)
				}
			})			
		},
		getNewsList ({commit}){
			axios.get('/henan/user?action=getNewsList').then(res=>{
				if(res.data.code == 200){
					commit('getNewsList',res.data.data)
				}else{
					commit('getNewsList',[])
					this._vm.$message.error(res.data.err)
				}
			})	
		},
		getFilmsList ({commit}){
			axios.get('/henan/user?action=getFilmsList').then(res=>{
				if(res.data.code == 200){
					commit('getFilmsList',res.data.data)
				}else{
					commit('getFilmsList',[])
					this._vm.$message.error(res.data.err)
				}
			})	
		}
	},
	getters: {
		
	}
})
