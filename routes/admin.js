var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/doctor-helpers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Treesa",
      desc:"MBBS, MD"
    },
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Ebin",
      desc:"MBBS"
    },
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Joseph",
      desc:"MD"
    },
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Richard",
      desc:"MBBS, MD"
    },
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Treesa",
      desc:"MBBS, MD"
    },
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Ebin",
      desc:"MBBS"
    },
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Joseph",
      desc:"MD"
    },
    {
      image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      name:"Richard",
      desc:"MBBS, MD"
    }
  ]

  res.render('admin/view-products', {products, admin:true})
});

router.get('/add-product', function(req,res){
   res.render('admin/add-product')
})

router.post('/add-product', function(req,res){
  console.log(req.body)
  console.log(req.files.fileToUpload)
  productHelper.addProduct(req.body,(result)=>{
    res.render('admin/add-product')
  })
})

module.exports = router;
