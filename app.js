var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const verifyMiddleware = require('./routes/middleware/verify');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 引入预约管理模块路由文件
var orderRouter = require('./routes/order');
var eventRouter =require('./routes/event');
var cateRouter=require('./routes/cate');

// 引入案例管理模块路由文件
var caseRouter = require('./routes/case');
// 引入文章管理模块路由文件
var articleRouter = require('./routes/article');
// 引入企业信息管理模块路由文件
var CompanyRouter = require('./routes/company');
// 引入管理员管理模块路由文件
var adminRouter = require('./routes/admin');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/order',verifyMiddleware.verifyToken, orderRouter);
app.use('/event',verifyMiddleware.verifyToken, eventRouter);
app.use('/cate', verifyMiddleware.verifyToken,cateRouter);
app.use('/case', verifyMiddleware.verifyToken,caseRouter);
app.use('/article', verifyMiddleware.verifyToken,articleRouter);
app.use('/company',verifyMiddleware.verifyToken, CompanyRouter);
app.use('/admin', verifyMiddleware.verifyToken,adminRouter);


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
