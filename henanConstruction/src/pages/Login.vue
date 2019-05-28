<template>
	<div class="login">
	  <bscroll>
		<h1>登录</h1>
		<div class="form">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
			  <el-form-item prop="phone">
			    <el-input type="text" v-model="ruleForm.phone"  placeholder="请输入手机号" autocomplete="off" maxlength="11">
			    	<i slot="prefix" class="el-input__icon el-icon-user"></i>
			    </el-input>
			  </el-form-item>
			  <el-form-item prop="pass">
			    <el-input type="password" v-model="ruleForm.pass"  placeholder="请输入密码" autocomplete="off">
			    	<i slot="prefix" class="el-input__icon el-icon-lock"></i>
			    </el-input>
			  </el-form-item>			  	
			  <el-form-item>
			    <el-button type="" @click="submitForm('ruleForm')">登录</el-button>
			  </el-form-item>
			  <el-row type="flex" class="row-bg box" justify="space-between">
			  	<router-link to="/register">立即注册</router-link>
			  	<router-link to="/forget">忘记密码？</router-link>
			  </el-row>
			</el-form>
		</div>
	  </bscroll>
	</div>
</template>

<script>
export default {
	name: 'Login',
	 data() { 
      return {
      	ruleForm: {
      		phone: '',
      		pass: ''
      	},
      	rules: {
      		phone: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
      		pass: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      	}
      }
        
    },
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.ajax.post('/henan/user?action=login',this.ruleForm).then(result=>{
			  			if(result.data.code == 200){
			  				this.$notify({
			  					title: '成功',
			  					message: result.data.success,
			  					type: 'success'
			  				});
			  				this.$router.push('/home')			  				
			  			}else{
			  				this.$notify.error({
			  					title: '错误',
			  					message: result.data.err,
			  				})
			  			}
			  		})
          } else {
            this.$notify.error({
 				title: '错误',
				message: '您的账号或密码有误'
			})
            return false;
          }
        });
      }
    },
	computed: {},
	mounted (){
		
	}
}
</script>

<style scoped lang="less">
.login{
	.fullpage();
	color: #fff;
	background-color: #0F93F2;
	h1{
		font-size: 0.5625rem;
		font-weight: 500;
		line-height: 1.125rem;
		text-align: center;
		padding-top: 3.125rem;
	}
	.form{
		padding: 0.625rem;							
		button{
			width: 100%;
			margin-top: 1.25rem;
		}
		a{
			color: #fff;
		}			
	}
}
</style>