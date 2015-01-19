var app = require('express');
var router = app.Router();

router.get('/',function(req,res){
res.render('index',{title:"Vikene's Blog",status:"Offline"});

})


module.exports = router;