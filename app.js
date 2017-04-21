/*jshint esversion: 6 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3003;

app.get('/',(req,res)=>{
	res.send('hello world!!');
});

app.listen(port,function(){
	console.log('ravchat Server is running on port : '+port);
});
