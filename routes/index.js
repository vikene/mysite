var app = require('express');
var router = app.Router();

router.get('/',function(req,res){
    
    var db = req.db;
    var collection = db.get('blog');
    collection.find({},function(err,doc){
        var buffer = doc.length;
    
        for(var i =0;i<doc.length;i++)
        {
            buffer[doc.length-1] = doc[i];
        }
    
    })
res.render('index',{title:"Vikene's Blog",status:"Offline",bloglist:buffer});

})


module.exports = router;