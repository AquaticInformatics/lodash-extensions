var expect = require('chai').expect;
var isNullOrUndefined = require('../source/isNullOrUndefined');

describe('isNullOrUndefined', () => {
    [
        42,
        'foobar',
        '',
        {},
        []
    ].forEach(testValue => {
        it('should return false if given ' + testValue, () => {
            expect(isNullOrUndefined(testValue)).to.be.false;
        });
    });

    it('should return true if given undefined', () => {
        expect(isNullOrUndefined()).to.be.true;
    });

    it('should return true if given null', () => {
        expect(isNullOrUndefined(null)).to.be.true;
    });
});
