var app = require('express');
var router = app.Router();

router.get('/',function(req,res){
res.send("Hellow World babe");

})


module.exports = router;