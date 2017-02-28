var express = require("express");
var path = require("path");


var app = express();




app.use(express.static(path.join(__dirname,"www")));

app.use(function(req,res){
	res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000,function(err){
	if(err)
		throw err;
	console.log('starting...');
})
