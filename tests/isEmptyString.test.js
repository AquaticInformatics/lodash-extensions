var expect = require('chai').expect;
var isEmptyString = require('../source/isEmptyString');

describe('isEmptyString', () => {
    [
        undefined,
        null,
        42,
        'foobar',
        {}
    ].forEach(testValue => {
        it('should return false if given ' + testValue, () => {
            expect(isEmptyString(testValue)).to.be.false;
        });
    });

    it('should return true if given an empty string', () => {
        expect(isEmptyString('')).to.be.true;
    });
});
