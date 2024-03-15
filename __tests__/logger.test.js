
// for a logger test

// testing for - did it log something
// did it call the next function

const logger = require('../middleware/logger.js')

describe('tests the logger middleware', () => {
    let consoleSpy;
    let req = { path: '/test' };
    let res = {};
    // pretend function that determines if something is called, did it get an argument
    let next = jest.fn() // spy on the next value () => {}

    // Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than just testing the output. You can create a mock function with jes.fn().

    //beforeEach() method in jest before every test that is run do this behavior (ie do this before the test)
    beforeEach(() => {
        // jest spyOn() method spies on console command and the method of that command we are spying on is log.  
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // Put the console back - cleanup
        consoleSpy.mockRestore();
    });
    test("properly logs some output", () => {
        // I expect that the logger function was called
        logger(req, res, next);
        // and what it was called with
        expect(consoleSpy).toHaveBeenCalledWith(
            `Hello: ever expanding universe ${req.path}`
        )
    })
    test("the next function gets called", () => {
        logger(req, res, next);
        expect(next).toHaveBeenCalledWith();
    })
    // .toHaveBeenCalledWith() is a method chained on the expect() function in jest testing.
    // looking at what arguments were passed into a function .toHaveBeenCalledWithTheseArguments
})