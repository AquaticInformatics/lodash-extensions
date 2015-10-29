var expect = require('chai').expect;
var isNotNullOrUndefined = require('../source/isNotNullOrUndefined');

describe('isNotNullOrUndefined', () => {
    [
        '',
        42,
        'foobar',
        {},
        []
    ].forEach(testValue => {
        it('should return true if given ' + testValue, () => {
            expect(isNotNullOrUndefined(testValue)).to.be.true;
        });
    });

    it('should return false if given undefined', () => {
        expect(isNotNullOrUndefined()).to.be.false;
    });

    it('should return false if given null', () => {
        expect(isNotNullOrUndefined(null)).to.be.false;
    });
});
