var expect = require('chai').expect;
var isStringWithValue = require('../source/isStringWithValue');

describe('isStringWithValue', () => {
    [
        undefined,
        null,
        NaN,
        42,
        '',
        {},
        []
    ].forEach(testValue => {
        it('should return true if given ' + testValue, () => {
            expect(isStringWithValue(testValue)).to.be.false;
        });
    });

    it('should return false if given empty string', () => {
        expect(isStringWithValue('0')).to.be.true;
    });
});
