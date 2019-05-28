var express = require('express');
var router = express.Router();
var db = require('./mongodb');

/*用户数据库操作*/
router.post('/user',(req,res)=>{
	switch (req.query.action){
		case 'register'://注册
		var phone = req.body.phone.match(/^1([38]\d|4[579]|5[0-35-9]|66|7[0135-8]|9[89])\d{8}$/) ? req.body.phone : false;
		var pass = req.body.pass.match(/^[\da-zA-Z]{6,12}$/) ? req.body.pass : false;
			if(phone && pass){
				db('userList','find',{},arr => {
					let flag = arr.some(v => v.phone === phone);
					if(flag){
						res.send({
							code: 400,
							err: '改手机号已注册！'
						})
					}else{
						var data = {
							tokenId: arr.length + 1,
							phone,
							pass
						};
						db('userList','add',data, result => {
							if(result.result.n != 0){
								res.send({
									code: 200,
									success: '注册成功'
								})
							}else{
								res.send({
									code: 400,
									err: '注册失败'
								})	
							}
						})
					}
				})
			}else{
				res.send({
					code: 400,
					err: '输入格式有误'
				})
			}
			break;
		case 'login'://登录
			if(req.body.phone.match(/^1([38]\d|4[579]|5[0-35-9]|66|7[0135-8]|9[89])\d{8}$/)){
				var data = {
					phone: req.body.phone,
					pass: req.body.pass
				};
				db('userList','find',{phone: req.body.phone},arr => {
					if(arr.length > 0){
						if(arr.some(v => v.pass === req.body.pass)){
							req.session.userInfo = {
								tokenId: arr[0].tokenId
							};
							res.send({
								code: 200,
								success: '登录成功'
							})
						}else{
							res.send({
								code: 400,
								err: '密码错误'
							})	
						}
					}else{
						res.send({
							code: 400,
							err: '手机号码错误'
						})
					}
				})
			}else{
				res.send({
					code: 400,
					err: '手机号码有误'
				})
			}
			break;
		case 'forget'://更改密码
			var phone = req.body.phone.match(/^1([38]\d|4[579]|5[0-35-9]|66|7[0135-8]|9[89])\d{8}$/) ? req.body.phone : false;
			var pass = req.body.pass.match(/^[\da-zA-Z]{6,12}$/) ? req.body.pass : false;
			if(phone && pass){
				db('userList','find',{phone:req.body.phone},arr => {
					if(arr.length > 0){
						db('userList','update',[{
							phone: req.body.phone 
						},{
							$set: {pass: req.body.pass}
						}],result => {
							if(result.result.n != 0){
								res.send({
									code: 200,
									success: '密码更改成功'
								})
							}else{
								res.send({
									code: 400,
									err: '密码更改失败'
								})	
							}
						})
					}else{
						res.send({
							code: 400,
							err: '该手机号未注册！'
						})
					}
				})
			}else{
				res.send({
					code: 400,
					err: '输入格式有误'
				})
			}
			break;
		case 'quit'://退出登录
			req.session.userInfo = null;//清空该用户后台储存的信息
			if(req.session.userInfo == null) {
				res.send({
					code: 200,
					success: '退出登录'
				})
			} else {
				res.send({
					code: 400,
					err: '退出登录失败'
				})
			}
			break;	
		case 'getUserInfo'://获取用户信息
			if(req.session.userInfo){
				res.send({
					code: 200,
					success: '已登录，请继续操作！'
				})
			}else{
				res.send({
					code: 400,
					err: '未登录，请先登录！'
				})
			}
			break;			
		default:
			res.send({
				code: 400,
				err: '未解析到请求服务的地址'
			})
			break;
	}
});

router.get('/user',(req,res)=>{
	switch (req.query.action){
		//新闻列表获取
		case 'getNewsList':
		db('newsList','find',{},arr=>{
			if(arr.length>0){
				res.send({
					code: 200,
					success: '数据获取成功',
					data: arr
				})
			}else{
				res.send({
					code: 400,
					err: '暂无数据'
				})	
			}
		})
		break;
		//视频列表获取
		case 'getFilmsList':
		console.log(0)
		db('filmsList','find',{},arr=>{
			console.log(arr)
			if(arr.length>0){
				res.send({
					code: 200,
					success: '数据获取成功',
					data: arr
				})
			}else{
				res.send({
					code: 400,
					err: '暂无数据'
				})	
			}
		})
		break;
	}
});

//router.get('/user',(req,res)=>{
//	switch (req.query.action){
//		
//	}
//})

module.exports = router;
