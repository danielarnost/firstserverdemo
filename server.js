var PORT = 8000
var express = require ('express');

var app = express()


app.get('/', function (req, res){
	res.send ('The Homepage');


});
console.log(process.env.USER)

app.listen(process.env.PORT || PORT, function(){
	console.log( "24 happens on " + PORT)
});