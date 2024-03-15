'use strict';

//import server methods
const express = require('express');

const server = express();

//error handlers
const pageNotFoundHandler = require('./routeErrorHandlers/404.js');

const serverErrorHandler = require('./routeErrorHandlers/500.js');

//middleware - adds timestamp to request obj
// middle does something with the request that comes in before sending back a response
const stamper = require('./middleware/stamper.js');

//default route
server.get('/', (req, res) => res.send('Hello, this is the default route.'));

//good route
server.get('/good', (req, res) => res.send('Very good! You have entered the realm of enlightenment.'));

//bad route
server.get('/bad', stamper, (req, res, next) => next({ message: 'this is a bad route ' + req.timestamp}));

//invalid route -- can do multiple ways
//one is with server.get('*', handle route) the other way is done below
server.use('*', pageNotFoundHandler);

server.use(serverErrorHandler);

// server.listen(PORT, ()=> console.log(`Running on port ${PORT}`));
module.exports = server;
