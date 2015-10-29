var expect = require('chai').expect;
var isNotEmptyString = require('../source/isNotEmptyString');

describe('isNotEmptyString', () => {
    [
        undefined,
        null,
        NaN,
        42,
        'foobar',
        {},
        []
    ].forEach(testValue => {
        it('should return true if given ' + testValue, () => {
            expect(isNotEmptyString(testValue)).to.be.true;
        });
    });

    it('should return false if given empty string', () => {
        expect(isNotEmptyString('')).to.be.false;
    });
});
