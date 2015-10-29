var expect = require('chai').expect;
var isValueMissing = require('../source/isValueMissing');

describe('isValueMissing', function() {
    [
        undefined,
        null,
        ''
    ].forEach(function(testValue) {
        it('should return true if given ' + testValue, function() {
            expect(isValueMissing(testValue)).to.be.true;
        });
    });

    [
        'foobar',
        true,
        false,
        [],
        {},
        [1],
        {foo:'bar'}
    ].forEach(function(testValue) {
        it('should return false if given ' + testValue, function() {
            expect(isValueMissing(testValue)).to.be.false;
        });
    });
});
