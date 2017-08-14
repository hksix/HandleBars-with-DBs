var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('facilities', { 
    name: 'Tennis Court',
    reviews: 'Play some tennis today', 
    location: 'THE THUNDER DOME!'
  });
  // res.send('respond with a resource');
});

module.exports = router;
