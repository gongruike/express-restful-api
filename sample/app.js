var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var users = require('./routes/user');

var app = express();

var router_v1 = express.Router()
router_v1.use('/user', users);

var router_v2 = express.Router()
router_v2.use('/user', users);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Public

// Access control layer
app.use(function(req, res, next) {

  if (req.url.indexOf('v1') > 0) {

    // 需要授权的接口
    if ((req.method === 'GET') || (req.method === 'POST')) {
      // 授权是否成功
      next()
    } else {
      res.status(401).json({error: 'not authed'})
    }
  } else {
    // 不需要授权的接口
    next()
  }
});

//
app.use('/v1', router_v1)
app.use('/v2', router_v2)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({message: 'not found'});
});

module.exports = app;
