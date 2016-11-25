var PORT = 8000;
var express = require ('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res){ //one route
	res.render('home');
});


app.listen(process.env.PORT || PORT, function(){
	console.log('magic happens on ' + PORT)
});