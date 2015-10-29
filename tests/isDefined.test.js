var expect = require('chai').expect;
var isDefined = require('../source/isDefined');

describe('isDefined', () => {
    [
        null,
        42,
        'foobar',
        {},
        []
    ].forEach(testValue => {
        it('should return false if given ' + testValue, () => {
            expect(isDefined(testValue)).to.be.true;
        });
    });

    it('should return false if given undefined', () => {
        expect(isDefined()).to.be.false;
    });
});
