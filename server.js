var express = require("express"),
	app = express(),
	port = 8096,
	io = require('socket.io');
 
app.get("/", function(req, res){
    res.send("It works!");
});
 
io..listen(app.listen(port));
console.log("Listening on port " + port);