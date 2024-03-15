'use strict';

//import supertest - lets us mock a server connection/request (like .listen)
//import jest
const supertest = require('supertest');
const server = require('../server.js');

//supertest will make a fake request based on our server - allows us to test w/o having an open port
const mockRequest = supertest(server);

//jest convention pattern of describe, test, expect
describe('Basic server functions work as expected.', () => {
    //all tests for this suite live here
    test('Request to good route sends string.', async () => {
        const response = await mockRequest.get('/good');
        expect(response.text).toBe('Very good! You have entered the realm of enlightenment.');
    });
    test('Handles undefined routes.', async () => {
        const response = await mockRequest.get('/whoops');
        expect(response.status).toEqual(404);
    });
    test('Checks to see if bad route gets error.message.', async () => {
        const response = await mockRequest.get('/bad');
        expect(response._body.message).toContain('this is a bad route ');
    });
});
