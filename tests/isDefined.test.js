var expect = require('chai').expect;
var isDefined = require('../source/isDefined');

describe('isDefined', function() {
    it('should return false if given undefined', function() {
        expect(isDefined()).to.be.false;
    });

    it('should return true if given null', function() {
        expect(isDefined(null)).to.be.true;
    });

    it('should return true if given a number', function() {
        expect(isDefined(42)).to.be.true;
    });

    it('should return true if given a string', function() {
        expect(isDefined('foo')).to.be.true;
    });

    it('should return true if given an object', function() {
        expect(isDefined({})).to.be.true;
    });
});
