var PORT = 8000
var express = require ('express');

var app = express()


app.get('/', function (req, res){ //one route
	res.send ('The Homepage');


});


app.listen(process.env.PORT || PORT, function(){
	
});