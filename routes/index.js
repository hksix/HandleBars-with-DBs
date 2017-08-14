var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'The Express-Database app',
    message: 'Explore a database using express and handlebars.js !',
    membersBtn: "<button>list of members</button>",
    facilitiesBtn: "<button>list of facilities</button>"
    

  });
});

module.exports = router;
