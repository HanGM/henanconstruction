var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//开放项目静态资源文件夹
app.use(express.static(path.join(__dirname, 'public')));
//开放后台图片资源文件夹
app.use(express.static(path.join(__dirname, 'pic')));
//开放后台视频资源文件夹
app.use(express.static(path.join(__dirname, 'video')));
app.use(session({
	name: 'henan',//储存session_id的cookie的名称
	secret: 'henan',//加密字符串，必须
	cookie: {maxAge: 3600000},//cookie失效时间，毫秒
	resave: false,//每次请求是否都重新设置session
	saveUninitialized: false//每次请求是否都重新设置session
}));
app.use('/henan', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
