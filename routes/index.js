var app = require('express');
var router = app.Router();

router.get('/',function(req,res){
    
    var db = req.db;
    var collection = db.get('blog');
    collection.find({},function(err,doc){
        var buffer = new Array(doc.length);
        var j=0;
        for(var i =doc.length-1;i>=0;i--)
        {
            buffer[j] = doc[i];
            j++;
        }
        res.render('index',{"title":"Vikene's Blog","status":"Offline","bloglist":buffer});
    
    })


})

router.get('/login',function(req,res){
    res.render('login',{title:"Login to access the server !",user:"java"})

})

router.get('/post',function(req,res){
    res.render('post',{title:"Post up .."})

})


module.exports = router;