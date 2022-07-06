var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"ipone",
      category:"Mobile",
      description:"this is good phone",
      image:"https://www.reliancedigital.in/medias/Apple-iPhone-12-128GB-491996644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MzY2Mjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2hiYi85NTMwMDA1MTU5OTY2LmpwZ3xmNjY0NjAyYjMyNmQ2MWE0YmRiMzMzY2EyMjgyZjVkYjBiODY2YWExMzY2MTdkNTM0MzcxMDgzNTAxZWI3ODBl",
    },
    {
      name:"ipone",
      category:"Mobile",
      description:"this is good phone",
      i:"https://www.reliancedigital.in/medias/Apple-iPhone-12-128GB-491996644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MzY2Mjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2hiYi85NTMwMDA1MTU5OTY2LmpwZ3xmNjY0NjAyYjMyNmQ2MWE0YmRiMzMzY2EyMjgyZjVkYjBiODY2YWExMzY2MTdkNTM0MzcxMDgzNTAxZWI3ODBl",
    },
    {
      name:"ipone",
      category:"Mobile",
      description:"this is good phone",
      image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F4668%2Fas-images.apple.com%2Fis%2Fiphone11-select-2019-family_GEO_EMEA%3Fwid%3D882%26hei%3D1058%26fmt%3Djpeg%26qlt%3D90%26.v%3D1567022219953&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fin%2Fshop%2Fbuy-iphone%2Fiphone-11&tbnid=8_7bpEPVIJ1KEM&vet=12ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg..i&docid=gCdNv8azCdED-M&w=882&h=1058&q=iphone&ved=2ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg",
    },
    {
      name:"ipone",
      category:"Mobile",
      description:"this is good phone",
      image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F4668%2Fas-images.apple.com%2Fis%2Fiphone11-select-2019-family_GEO_EMEA%3Fwid%3D882%26hei%3D1058%26fmt%3Djpeg%26qlt%3D90%26.v%3D1567022219953&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fin%2Fshop%2Fbuy-iphone%2Fiphone-11&tbnid=8_7bpEPVIJ1KEM&vet=12ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg..i&docid=gCdNv8azCdED-M&w=882&h=1058&q=iphone&ved=2ahUKEwj7qKb4iuL4AhVdidgFHU6yBvQQMygAegUIARCsAg",
    },
  ]
  res.render('index', {products});
});

module.exports = router;
