var expect = require('chai').expect;
var isEmptyString = require('../source/isEmptyString');

describe('isEmptyString', function() {
    [
        undefined,
        null,
        42,
        'foobar',
        {}
    ].forEach(function(testValue) {
        it('should return false if given ' + testValue, function() {
            expect(isEmptyString(testValue)).to.be.false;
        });
    });

    it('should return true if given an empty string', function() {
        expect(isEmptyString('')).to.be.true;
    });
});
