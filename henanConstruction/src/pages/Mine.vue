<!--我的 主页面-->
<template>
  <div class="mine">
  	<bscroll>
	  	<div class="headpic">
	  		<i class="el-icon-user" @click="login"></i>
	  	</div>
	  	<div class="more" v-for="item in myInfoList" @click="getInfo(item)">
	  		<i :class="[item.icon,item.color]"></i>
	  		<span>{{item.title}}</span>
	  		<i class="el-icon-arrow-right"></i>
	  	</div>
  	</bscroll>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Mine',
  data () {
    return {
      
    }
  },
  methods: {
  	login (){
  		this.isLogin ? this.$router.push('/myinfo/material') : this.$router.push('/login')
  	},
  	getInfo (item){
  		switch (item.type){
  			case 'material':
  			this.isLogin ? this.$router.push({name: 'MyInfo', params: {type: item.type}}) : this.$router.push('/login')
  				break;
  			case 'collection':
  			this.isLogin ? this.$router.push({name: 'MyInfo', params: {type: item.type}}) : this.$router.push('/login')
  				break;
  			case 'contribute':
  			this.isLogin ? this.$router.push({name: 'MyInfo', params: {type: item.type}}) : this.$router.push('/login')
  				break;
  			case 'popularize':
  			this.$router.push({name: 'MyInfo', params: {type: item.type}})
  				break;
  			case 'message':
  			this.isLogin ? this.$router.push({name: 'MyInfo', params: {type: item.type}}) : this.$router.push('/login')
  				break;
  			case 'setting':
  			this.$router.push({name: 'MyInfo', params: {type: item.type}})
  				break;
  			default:
  				break;
  		}
  	}
  },
  computed: {...mapState(["isLogin",'myInfoList'])},
  mounted (){
  	this.$store.dispatch('changeLogin');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine{
	.all();
	height: calc(100% - 1.5625rem);
	.headpic{
		height: 3.75rem;
		background: url(~@/assets/img/bg.jpg) no-repeat;
		position: relative;
		margin-bottom: 0.1875rem;
		i{
			font-size: 1.5rem;
			padding: 0.3125rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			background: rgba(0,0,0,.4);
			border-radius: 50%;
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
		.red{
			color: #D94342;
		}
		.el-icon-arrow-right{
			float: right;
			line-height: 1.125rem;
		}
	}
}
</style>
