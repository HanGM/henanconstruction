import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Recommend from '@/pages/Recommend'
import News from '@/pages/News'
import Videos from '@/pages/Videos'
import Films from '@/pages/Films'
import Mine from '@/pages/Mine'
import MyInfo from '@/pages/MyInfo'
import MyDetail from '@/pages/MyDetail'
import Detail from '@/pages/Detail'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Forget from '@/pages/Forget'
import Login from '@/pages/Login'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/headline',
      children: [  
	      {
		      path: 'headline',
		      name: 'Headline',
		      component: Content,
		      meta: {tag: '中原头条',showBanner: true}
	    	},
	      {
		      path: 'policy',
		      name: 'Policy',
		      component: Content,
		      meta: {tag: '政策法规'}
	    	},
	      {
		      path: 'cityplan',
		      name: 'Cityplan',
		      component: Content,
		      meta: {tag: '城乡规划'}
	    	},
	      {
		      path: 'cityconstruction',
		      name: 'Cityconstruction',
		      component: Content,
		      meta: {tag: '城乡建设'}
	    	},
	      {
		      path: 'citymanagement',
		      name: 'Citymanagement',
		      component: Content,
		      meta: {tag: '城市管理'}
	    	},
	      {
		      path: 'propertymanagement',
		      name: 'Propertymanagement',
		      component: Content,
		      meta: {tag: '房产管理'}
	    	},
	      {
		      path: 'traditionalvillages',
		      name: 'Traditionalvillages',
		      component: Content,
		      meta: {tag: '传统村落'}
	    	},
	      {
		      path: 'housingfund',
		      name: 'Housingfund',
		      component: Content,
		      meta: {tag: '住房基金'}
	    	},
	      {
		      path: 'corporate',
		      name: 'Corporate',
		      component: Content,
		      meta: {tag: '企业风采'}
	    	},
	      {
		      path: 'health',
		      name: 'Health',
		      component: Content,
		      meta: {tag: '生活养生'}
	    	},
	      {
		      path: '*',
		      redirect: '/home/headline'
	    	}	      
    	]
    },
    {
      path: '/recommend',
      name: 'Recommend',
      meta: {
      	thumbNum: 0
      },
      component: Recommend      
    },
    {
      path: '/news/:id',
      name: 'News',
      meta: {
      	isShow: true
      },
      component: News
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/films/:id',
      name: 'Films',
      meta: {
      	isShow: true
      },
      component: Films
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/myinfo/:type',
      name: 'MyInfo',
      meta: {
      	isShow: true
      },
      component: MyInfo,
      children: [{
      	path: 'draught',
      	name: 'Draught',
      	meta: {
	      	isShow: true
	      },
      	component: Detail
      },{
      	path: 'review',
      	name: 'Review',
      	meta: {
	      	isShow: true
	      },
      	component: Detail
      },{
      	path: 'pass',
      	name: 'Pass',
      	meta: {
	      	isShow: true
	      },
      	component: Detail
      },{
      	path: 'fail',
      	name: 'Fail',
      	meta: {
	      	isShow: true
	      },
      	component: Detail
      },{
      	path: 'discuss',
      	name: 'Discuss',
      	meta: {
	      	isShow: true
	      },
      	component: Detail
      },{
      	path: 'thumb',
      	name: 'Thumb',
      	meta: {
	      	isShow: true
	      },
      	component: Detail
      },{
      	path: 'tips',
      	name: 'Tips',
      	meta: {
	      	isShow: true
	      },
      	component: Detail
      }]     
    },
    {
      path: '/mydetail',
      name: 'MyDetail',
      meta: {
      	isShow: true
      },
      component: MyDetail
    },
    {
      path: '/search',
      name: 'Search',
      meta: {
      	isShow: true
      },
      component: Search
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
      	isShow: true
      },
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
      	isShow: true
      },
      component: Register
    },
    {
      path: '/forget',
      name: 'Forget',
      meta: {
      	isShow: true
      },
      component: Forget
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
