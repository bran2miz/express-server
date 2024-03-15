'use strict';

//bring server from server.js with all of the knowledge it obtains throughout the length of the page.
const server = require('./server');
const {config} = require('dotenv');
config(); //or require('dotenv').config() works

const PORT = process.env.PORT;

//test route without turning on server
server.listen(PORT, ()=> console.log(`Running on port ${PORT}`));