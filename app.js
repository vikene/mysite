var express= require('express')
var app = express();

app.get('/',function(req,res){
res.sendFile(__dirname+"/index.html");
    console.log(req.headers.host);
})
app.listen(80);