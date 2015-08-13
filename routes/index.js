var express = require('express');
var router = express.Router();

var title = 'Andrea Baker Portfolio';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: title });
});


module.exports = router;
