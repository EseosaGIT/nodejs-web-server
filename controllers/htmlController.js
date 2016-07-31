

module.exports = function (app, middleware) {

    // adding to the passed in app the following routes
    app.get('/contact', middleware.requireAuthentication, function(req, res){
        res.send('<html><head><title>Node app - contact</title><link rel="stylesheet" type="text/css" href="../assets/style.css"></head><body><h1>Node app here</h1><p>Contact Page!!!</p></body></html>');
    });
}