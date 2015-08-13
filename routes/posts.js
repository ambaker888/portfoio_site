var express = require('express');
var router = express.Router();

var title = 'Andrea Baker Portfolio';

/* GET home page. */
router.get('/style-guides', function(req, res) {
  res.render('posts/2015-08-01-style-guides', { title: title });
});



module.exports = router;
