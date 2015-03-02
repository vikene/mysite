// Experimental 
// Author not responsible for damages caused by this 
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var usernumber = 0;

io.on('connection', function(socket){
  console.log('a user connected');
    usernumber++;
    socket.on("Message",function(username,message){
        console.log(username+" : "+message);
        io.emit("ack","Recieved");
        io.emit("getthis",username,message);
    })
    socket.on('disconnect',function(){
        console.log("User has been disconnected");
        usernumber--;
    })
});



http.listen(5394);