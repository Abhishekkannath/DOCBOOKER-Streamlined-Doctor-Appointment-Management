var express = require('express');
var router = express.Router();
const doctorHelpers = require('../helpers/doctor-helpers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  doctorHelpers.getAllProducts().then((doctors)=>{
    res.render('admin/view-doctors', {doctors, admin:true})
  })

  
});

router.get('/add-doctor', function(req,res){
   res.render('admin/add-doctor')
})

router.post('/add-doctor', function(req,res){
  doctorHelpers.addProduct(req.body, (insertedId) => {
    let image = req.files.fileToUpload;
    image.mv("./public/images/" + insertedId + ".jpg", (err, done) => {
      if (!err) {
        res.render("admin/add-doctor");
      }
      else{
        console.log(err)
      }
    });
  });

})

module.exports = router;
