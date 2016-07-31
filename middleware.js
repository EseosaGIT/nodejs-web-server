
// exporting the middleware
module.exports = {
    requireAuthentication: function(req, res, next) {
        console.log('route hit');
        next();
    },
    logger: function(req, res, next){
        console.log('Request url: '+ req.url + ' Request method: '+req.method + ' Date: '
                     + new Date().toDateString() + ' Time: ' + new Date().toLocaleTimeString());
        next(); 
    }
};