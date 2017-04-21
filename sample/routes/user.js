var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 类型
  // 分页
  res.json({name: 'get user list'});
});

router.post('/', function(req, res, next) {
  // 参数校验
  res.status(201).json({name: 'user created'});
});

router.get('/:id', function(req, res, next) {
  // 参数校验
  res.json({name: 'get user ' + req.params.id});
});

router.put('/:id', function(req, res, next) {
  // 参数校验
  res.json({name: 'update user ' + req.params.id});
});

router.delete('/:id', function(req, res, next) {
  // 参数校验
  res.json({name: 'delete user ' + req.params.id});
});

module.exports = router;
