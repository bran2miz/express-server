'use strict';

const serverErrorHandler = (error, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        query: req.query,
        body: req.body,
        message: `SERVER ERROR: ${error.message ? error.message: error}}`
    });
};

module.exports = serverErrorHandler;

// function handle500(err, req, res, next) {
//     const error = err.message ? err.message : err;
//     // if there is a truthy message, use error.message, otherwise use
//     // what came as an error.
//     // throw new Error({message: "nice try you lose"})
//     // throw new Error('you were supposed to give me your name')
//     const errorObject = {
//         status: 500,
//         message:error,
//     };
//     res.status(500).json(errorObject);
// }