var express = require('express');
var router = express.Router();

const db = require('../db');


router.get('/', function(req, res, next) {
  
    db.query(`
      select * from cd.facilities;
    `).then((results)=>{
      res.render('facilities',{
        facility: results
      });
    })
  });


router.get('/:id', function(req, res, next) {
  
    db.one(`
      select * from cd.facilities where facid=${req.params.id};
    `).then((results)=>{
      res.render('facilities',{
        facility: results
      });
    })
  });



module.exports = router;
