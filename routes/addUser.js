var express = require('express');
var router = express.Router();

const db = require('../db');

router.get('/', function(req, res, next) {
  res.render('addUser', { 
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);

  db.result(`
    INSERT INTO cd.members (memid, surname, firstname, address, zipcode, telephone, recommendedby, joindate)
      VALUES(
        '10001',
      '${req.body.surname}',
      '${req.body.firstname}',
      '${req.body.address}',
      '${req.body.zipcode}',
      '${req.body.telephone}',
      DEFAULT,
      '2001-01-01'
      );
  `).catch(console.log)
  // .then((result) => {
  //     // console.log(result);
  //     res.render('addUser', {
  //       member: result
  //     });
  // })
});

module.exports = router;
// where memid=${req.params.id};

