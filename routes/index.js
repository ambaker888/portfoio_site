var express = require('express');
var router = express.Router();

var title = 'FS 24/7 LTD.';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: title });
});
router.get('/company', function(req, res) {
  res.render('company', { title: title });
});
router.get('/services', function(req, res) {
  res.render('services', { title: title });
});
router.get('/customer', function(req, res) {
  res.render('customer', { title: title });
});
router.get('/support', function(req, res) {
  res.render('support', { title: title });
});
router.get('/clients', function(req, res) {
  res.render('clients', { title: title });
});
router.get('/technicians', function(req, res) {
  res.render('technicians', { title: title });
});
router.get('/register', function(req, res) {
  res.render('register', { title: title });
});

module.exports = router;
