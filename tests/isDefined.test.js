var expect = require('chai').expect;
var isDefined = require('../source/isDefined');

describe('isDefined', function() {
    [
        null,
        42,
        'foobar',
        {},
        []
    ].forEach(function(testValue) {
        it('should return false if given ' + testValue, function() {
            expect(isDefined(testValue)).to.be.true;
        });
    });

    it('should return false if given undefined', function() {
        expect(isDefined()).to.be.false;
    });
});
