<template>
	<div class="register">
	  <bscroll>
		<h1>注册</h1>
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
			  <el-form-item prop="repass">
			    <el-input type="password" v-model="ruleForm.repass"  placeholder="请再次确认密码" autocomplete="off">
			    	<i slot="prefix" class="el-input__icon el-icon-lock"></i>
			    </el-input>
			  </el-form-item>			  	
			  <el-form-item>
			    <el-button type="" @click="submitForm('ruleForm')">立即注册</el-button>
			  </el-form-item>
			</el-form>
		</div>
	  </bscroll>
	</div>
</template>

<script>
export default {
	name: 'Register',
	 data() { 
	 	var checkPhone = (rule, value, callback) => {	 		
			if(!value.match(/^1([38]\d|4[579]|5[0-35-9]|66|7[0135-8]|9[89])\d{8}$/)) {
				callback(new Error('您输入的手机号码格式有误'))
			} else {
				callback()
			}
		};
      	var checkPass = (rule, value, callback) => {
			if(!value.match(/^[\da-zA-Z]{6,12}$/)) {
				callback(new Error('需要6-12位数字、字母组合'))
			} else {
				callback()
			}
		};
      	var checkRepass = (rule,value,callback)=>{
	   	  	if(value !== this.ruleForm.pass){
	   	  		callback(new Error('两次密码输入不一致'))
	   	  	}else{
	   	  		callback()
	   	  	}
	   	  };
      return {     	
      	ruleForm: {
      		phone: '',
      		pass: '',
      		repass: ''
      	},
      	rules: {
      		phone: [
	      		{ required: true, message: '账号不能为空', trigger: 'blur' },
	      		{ validator: checkPhone, trigger: 'blur' }
      		],
      		pass: [
	      		{ required: true, message: '密码不能为空', trigger: 'blur' },
	      		{ validator: checkPass, trigger: 'blur' }
      		],
      		repass: [
	      		{ required: true, message: '密码不能为空', trigger: 'blur' },
	      		{ validator: checkRepass, trigger: 'blur' }
      		]
      	}
      }
        
    },
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.ajax.post('/henan/user?action=register',this.ruleForm).then(result=>{
			  			if(result.data.code == 200){
			  				this.$notify({
			  					title: '成功',
			  					message: result.data.success,
			  					type: 'success'
			  				});
			  				this.$router.push('/login')			  				
			  			}else{
			  				this.$notify.error({
			  					title: '错误',
			  					message: result.data.err
			  				})
			  			}
			  		})
          } else {
            this.$notify.error({
				title: '错误',
				message: '请按正确的格式输入!',
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
.register{
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
			margin-top: 0.625rem;
		}			
	}
}
</style>