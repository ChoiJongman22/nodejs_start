var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/get/lee',function(req,res){
  res.status(200).json({
    "message":"현서야 사랑해!!"
  });
});

router.post('/api/post/nodejs-api',function(req,res){
  res.status(200).json({
    "message":"현서야 사랑해!!"
  });
});

module.exports = router;
