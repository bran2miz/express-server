'use strict';

const pageNotFoundHandler = (req, res) => {
    res.status(404).send({error: 404, message: 'No data on this route.'});
};

module.exports = pageNotFoundHandler;