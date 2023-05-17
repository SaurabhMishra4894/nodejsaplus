var express = require('express');
var router = express.Router();
var connection = require('../connection');


router.get('/returncategories', function (req, res, next) {
  connection.query('select * from `ap_maincategory`', function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send({'data':rows});
    }
  })
})

router.get('/returnstate', function (req, res, next) {
  connection.query('select * from `ap_state`', function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send({'data':rows});
    }
  })
})

router.get('/returncategory/:catId', function (req, res, next) {
  connection.query('select * from `ap_showcase` where catid = '+req.params.catId, function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send({'data':rows});
    }
  })
})

router.get('/returnProductDetails/:productId', function (req, res, next) {
  connection.query('select * from `ap_showcase` where showcaseid = '+req.params.productId, function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send({'data':rows});
    }
  })
})
router.get('/randomSuggestion/:catId', function (req, res, next) {
  connection.query('select * from `ap_showcase` where catid = '+req.params.catId+' ORDER BY RAND() LIMIT 8', function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send({'data':rows});
    }
  })
})


module.exports = router;
