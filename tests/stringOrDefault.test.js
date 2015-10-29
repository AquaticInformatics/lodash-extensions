var expect = require('chai').expect;
var stringOrDefault = require('../source/stringOrDefault');

describe('stringOrDefault', () => {
    it('should return default value if given undefined', () => {
        var expected = 'foobarbaz';

        var actual = stringOrDefault(undefined, expected);

        expect(actual).to.equal(expected);
    });

    it('should return default value if given null', () => {
        var expected = 'foobazblop';

        var actual = stringOrDefault(null, expected);

        expect(actual).to.equal(expected);
    });

    it('should return given value if it is not null or undefined', () => {
        var expected = 'foobazbim';

        var actual = stringOrDefault(expected);

        expect(actual).to.equal(expected);
    });

    it('should return the result of executing a function if defaultValue is a function', () => {
        var expected = 10;
        var actual = stringOrDefault(null, (a, b) => {return a + b; }, 7, 3);

        expect(actual).to.equal(expected);
    });
});
