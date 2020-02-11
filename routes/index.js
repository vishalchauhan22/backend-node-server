var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  setTimeout(function(){
    res.render('index', { title: 'This is the Evil Page' });
  }, 1500)
  
});

module.exports = router;
