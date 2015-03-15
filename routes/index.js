var app = require('express');
var router = app.Router();
var sessionName=null;
var sessionUser =null;
router.get('/',function(req,res){
    
    var db = req.db;
    var collection = db.get('blog');
    collection.find({},function(err,doc){
        var buffer = new Array(doc.length);
        var j=0;
        for(var i =doc.length-1;i>=0;i--)
        {
            buffer[j] = doc[i];
            buffer[j].content = doc[i].content.substring(0,100)+ " Read More >>";
            j++;
        }
        res.render('index',{"title":"Vikene's Blog","status":"Offline","bloglist":buffer});
    
    })


})

router.get('/login',function(req,res){
    res.render('login',{title:"Login to access the server !",user:"java"})

})

router.get('/post',function(req,res){
    res.render('post',{"title":"Post up ..", "sessionName":sessionName, "sessionUser":sessionUser})
    console.log(sessionUser)

})

router.post('/validate',function(req,res){
var db = req.db;
    var collection = db.get('userCollection')
    collection.find({"email":req.body.email},function(err,doc){
      
        
        if(doc.length != 0)
        {
            if(doc[0].email == req.body.email)
            {
                if(doc[0].password == req.body.password)
                {
                    console.log("User is Good to GO!")
                    sessionName = "xyptsdsdfj";
                    sessionUser = req.body.email;
                    res.render('validate',{"title":"Validate ..","session_name":"xyptsdsdfj", "session_user":req.body.email})
                }
            }
            else{
                res.redirect('/login')
            }
        }
        
    
    })
    
})

router.post('/blog_it',function(req,res){

    if((req.body.session == sessionName)&& (req.body.user== sessionUser))
       {
         var date = new Date();
           var headling = req.body.heading;
           var content = req.body.content;
           var tags = req.body.tags;
           var like = 1;
           var author = sessionUser;
            var db = req.db;
           var collection = db.get('blog');
           var json_object ={
            "headling":headling,
               "content":content,
               "tags":tags,
               "like":like,
               "date":date,
               "author":author
           
           }
           collection.insert(json_object);
           console.log("Did it great!")
           res.redirect('/post');
       }
        
})

router.get('/sorry',function(req,res){

    res.render("sorry",{});
    console.log("madhu logged");

})

router.get('/os_dev', function(req,res){

    res.render("os_index",{title:"Vikene Os dev blog"})
})

router.get('/boot_seq', function(req,res){
    
    res.render("boot_seq",{title:"Vikene Os dev Blog"})
})

router.get('/viewpost',function(req,res){
    var db = req.db;
    var collection = db.get("blog");
    collection.find({"_id":req.param("name")},function(err,doc){
    
        if(doc[0] != null)
        {
            //console.log(doc[0].content);
            res.render("viewpost.jade",{"title":"Vikene's Blog","headling":doc[0].headling,"content":doc[0].content});
        }
       
    })
})

module.exports = router;