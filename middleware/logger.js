'user strict';

module.exports = (req, res, next) => {
    // console is the object, log is the method, and the string is the argument that the object took. 
    console.log(`Hello: ever expanding universe ${req.path}`);
    next();
}