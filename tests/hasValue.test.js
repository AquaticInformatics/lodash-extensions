var expect = require('chai').expect;
var hasValue = require('../source/hasValue');

describe('hasValue', function() {
    [
        undefined,
        null,
        ''
    ].forEach(function(testValue) {
        it('should return false if given ' + testValue, function() {
            expect(hasValue(testValue)).to.be.false;
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
        it('should return true if given ' + testValue, function() {
            expect(hasValue(testValue)).to.be.true;
        });
    });
});
