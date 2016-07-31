

module.exports = function (app, middleware) {

    // adding to the passed in app the following routes
    app.get('/contact', middleware.requireAuthentication, function(req, res){
        res.send('<html><head><title>Node app - contact</title><link rel="stylesheet" type="text/css" href="../assets/style.css"></head><body><h1>Node app here</h1><p>Contact Page!!!</p></body></html>');
    });

    app.get('/about', middleware.requireAuthentication, function(req, res){
        res.send('<html><head><title>Node app - about</title><link rel="stylesheet" type="text/css" href="../assets/style.css"></head><body><h1>Node app here</h1><h2>Hello to my first Node app in Heroku</h2><p>ABout Page!!!</p></body></html>');
    });
}