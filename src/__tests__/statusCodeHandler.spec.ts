import {statusCodeHandler} from '../utils'

describe('Utility functions', () => {
    test('when a 500 code is passed in, a custom message is returned', () => {
        const expectedRes = "Internal server error 500";

        expect(statusCodeHandler(500)).toEqual(expectedRes);
    });

    test('when a 200 code is passed in, this is returned', () => {
        const expectedRes = 200;

        expect(statusCodeHandler(200)).toEqual(expectedRes);
    })

    test('when a 400 code is passed in, this is returned', () => {
        const expectedRes = 400;

        expect(statusCodeHandler(400)).toEqual(expectedRes);
    })
});