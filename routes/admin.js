var express = require('express');

const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"ipone",
      category:"Mobile",
      description:"this is good phone",
      image:"https://www.reliancedigital.in/medias/Apple-iPhone-12-128GB-491996644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MzY2Mjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2hiYi85NTMwMDA1MTU5OTY2LmpwZ3xmNjY0NjAyYjMyNmQ2MWE0YmRiMzMzY2EyMjgyZjVkYjBiODY2YWExMzY2MTdkNTM0MzcxMDgzNTAxZWI3ODBl",
    },
    {
      name:"samsung",
      category:"Mobile",
      description:"this is good phone",
      image:"https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name:"nokia",
      category:"Mobile",
      description:"this is good phone",
      image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F4668%2Fas-images.apple.com%2Fis%2Fiphone11-select-2019-family_GEO_EMEA%3Fwid%3D882%26hei%3D1058%26fmt%3Djpeg%26qlt%3D90%26.v%3D1567022219953&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fin%2Fshop%2Fbuy-iphone%2Fiphone-11&tbnid=8_7bpEPVIJ1KEM&vet=12ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg..i&docid=gCdNv8azCdED-M&w=882&h=1058&q=iphone&ved=2ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg",
    },
    {
      name:"realme ",
      category:"Mobile",
      description:"this is good phone",
      image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F4668%2Fas-images.apple.com%2Fis%2Fiphone11-select-2019-family_GEO_EMEA%3Fwid%3D882%26hei%3D1058%26fmt%3Djpeg%26qlt%3D90%26.v%3D1567022219953&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fin%2Fshop%2Fbuy-iphone%2Fiphone-11&tbnid=8_7bpEPVIJ1KEM&vet=12ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg..i&docid=gCdNv8azCdED-M&w=882&h=1058&q=iphone&ved=2ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg",
    },
  ]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.image
    console.log(id);
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
        console.log(err);
      }
    })

  })
})

module.exports = router;
