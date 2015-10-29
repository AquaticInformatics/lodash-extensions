var expect = require('chai').expect;
var isValueMissing = require('../source/isValueMissing');

describe('isValueMissing', () => {
    [
        undefined,
        null,
        ''
    ].forEach(testValue => {
        it('should return true if given ' + testValue, () => {
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
    ].forEach(testValue => {
        it('should return false if given ' + testValue, () => {
            expect(isValueMissing(testValue)).to.be.false;
        });
    });
});
