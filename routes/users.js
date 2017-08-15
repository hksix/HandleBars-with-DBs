var express = require('express');
var router = express.Router();

const db = require('../db');


router.get('/', function(req, res, next) {
  db.query(`
    select * from cd.members where memid>0 order by memid;
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
router.get('/:id/edit', function(req, res, next){
  db.one(`
    select * from cd.members where memid=${req.params.id};
  `).then ((result) =>{
      res.render('editUser',{
      member:result
      });
  });
});

router.post('/:id/edit', function(req, res, next) {
  console.log(req.body);

  db.result(`
    update cd.members
      set
      surname='${req.body.surname}',
      firstname='${req.body.firstname}',
      address='${req.body.address}',
      zipcode='${req.body.zipcode}',
      telephone='${req.body.telephone}'
      where memid=${req.params.id};
  `).then((result) => {
      console.log(result);
      res.render('editUser', {
        member: result
      });
  })
});
module.exports = router;


// firstname='${req.body.firstname}'
