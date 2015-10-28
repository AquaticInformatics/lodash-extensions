var expect = require('chai').expect;
var isNullOrUndefined = require('../source/isNullOrUndefined');

describe('isNullOrUndefined', function() {
    [
        42,
        'foobar',
        '',
        {},
        []
    ].forEach(function(testValue) {
        it('should return false if given ' + testValue, function() {
            expect(isNullOrUndefined(testValue)).to.be.false;
        });
    });

    it('should return true if given undefined', function() {
        expect(isNullOrUndefined()).to.be.true;
    });

    it('should return true if given null', function() {
        expect(isNullOrUndefined(null)).to.be.true;
    });
});
