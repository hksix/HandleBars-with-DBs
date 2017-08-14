var express = require('express');
var router = express.Router();

const db = require('../db');


router.get('/', function(req, res, next) {
  db.query(`
    select * from cd.members;
  `)
    .then((result)=>{
      res.render('users', {
        members:result
        
      });
    });
});

module.exports = router;
