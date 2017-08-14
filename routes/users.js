var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { 
    user: 'Hamza',
    message: ', hey there.', 
    title: 'ThunderDome!'
  });
  // res.send('respond with a resource');
});

module.exports = router;
