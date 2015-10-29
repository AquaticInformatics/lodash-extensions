var expect = require('chai').expect;
var hasValue = require('../source/hasValue');

describe('hasValue', () => {
    [
        undefined,
        null,
        ''
    ].forEach(testValue => {
        it('should return false if given ' + testValue, () => {
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
    ].forEach(testValue => {
        it('should return true if given ' + testValue, () => {
            expect(hasValue(testValue)).to.be.true;
        });
    });
});
