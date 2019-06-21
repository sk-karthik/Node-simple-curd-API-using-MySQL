const cors = require('cors');
const mysql = require('mysql');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 8088;
var session = require('express-session');



// Session Config
/*
app.use(session({
    secrect: "secrect",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300 }
})); */

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'captcha'
});

// connect to database
mc.connect(function (err) {
    if (err) console.log(err);
});


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'RESTful API! welcome to our api!' });
});

// more routes for our API will happen here


// Enable CORS 
app.all('/*', cors({ credentials: true, origin: true }));




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route


