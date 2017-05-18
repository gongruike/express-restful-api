var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 类型
  // 分页
  res.json([{
    uid: '10000',
    username: 'zhao'
  }, {
    uid: '10001',
    username: 'qian'
  }, {
    uid: '10002',
    username: 'sun'
  }, {
    uid: '10003',
    username: 'li'
  }, {
    uid: '10004',
    username: 'zhou'
  }]);
});

router.post('/', function(req, res, next) {
  // 参数校验
  res.status(201).json({name: 'user created'});
});

router.get('/:id', function(req, res, next) {
  // 参数校验
  res.json({
    uid: '10000',
    username: 'zhao'
  });
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
