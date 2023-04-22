var express = require('express');
var router = express.Router();
const doctorHelpers = require('../helpers/doctor-helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  doctorHelpers.getAllProducts().then((doctors)=>{
    res.render('user/view-doctors', {doctors, admin:false})
  })
  
});

module.exports = router;
