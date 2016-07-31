var express = require('express');
var app = express();
var middleware = require('./middleware');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;


app.use(middleware.logger);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/views'));


htmlController(app, middleware);

app.listen(port, function(){
    console.log('Server started on port '+port);
});
