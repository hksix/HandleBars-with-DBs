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

router.get('/:id', function(req, res,next) {
  db.one(`
  select * from cd.members where memid=${req.params.id};
  `).then((result)=>{
    console.log(result);
    res.render('users',{
      members:[result]
    });
  });
});

module.exports = router;
