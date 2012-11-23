var Express = require('express');
var app = new Express();

var SpaAPI = require('./api');
var api = new SpaAPI(app);

// A simple error handler
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.send(500, 'Oops! An error occurred…');
}

function requestLogger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

// Some stuff from express that is nice to have
app.use(Express.bodyParser());
app.use(Express.methodOverride());
app.use(app.router);

app.use(requestLogger);
app.use(errorHandler);

// Serve static resources
app.use(Express.static(__dirname + '/public'));

// Declare our api
api.start();

// Start and listen on port 8080
app.listen(8888);
console.log('Single Page Application started at 8888');