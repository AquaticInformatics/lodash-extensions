var expect = require('chai').expect;
var isNotNullOrUndefined = require('../source/isNotNullOrUndefined');

describe('isNotNullOrUndefined', function() {
    [
        '',
        42,
        'foobar',
        {},
        []
    ].forEach(function(testValue) {
        it('should return true if given ' + testValue, function() {
            expect(isNotNullOrUndefined(testValue)).to.be.true;
        });
    });

    it('should return false if given undefined', function() {
        expect(isNotNullOrUndefined()).to.be.false;
    });

    it('should return false if given null', function() {
        expect(isNotNullOrUndefined(null)).to.be.false;
    });
});
