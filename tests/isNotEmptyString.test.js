var expect = require('chai').expect;
var isNotEmptyString = require('../source/isNotEmptyString');

describe('isNotEmptyString', function() {
    [
        undefined,
        null,
        NaN,
        42,
        'foobar',
        {},
        []
    ].forEach(function(testValue) {
        it('should return true if given ' + testValue, function() {
            expect(isNotEmptyString(testValue)).to.be.true;
        });
    });

    it('should return false if given empty string', function() {
        expect(isNotEmptyString('')).to.be.false;
    });
});
