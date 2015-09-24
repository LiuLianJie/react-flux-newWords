var path = require('path');
var http = require('http');
var express = require('express');
var session = require('express-session');
var app = express();


app.set('port',process.env.PORT || 3002);
app.set('views',__dirname + '/static');
app.engine('.html',require('ejs').__express);
app.set('view engine','html');
app.use(express.static(path.join(__dirname,'static')));
app.use(session({
	secret: '12345',
	name: 'new-word',
	cookie: {maxAge: 80000},
	resave: false,
	saveUninitialized: true
}));

app.get('/',function(req,res){
	res.render('index');
});

app.listen(app.get('port'),function(){
	console.log('server listening on port '+ app.get('port'));
});