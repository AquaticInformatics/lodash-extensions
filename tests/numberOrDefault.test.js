var expect = require('chai').expect;
var numberOrDefault = require('../source/numberOrDefault');

describe('numberOrDefault', () => {

    [
        undefined,
        null,
        NaN,
        Infinity,
        -Infinity,
        {},
        'not a number',
        '12'
    ].forEach(testValue => {
        it('should return default value if given ' + testValue, () => {
            var expected = 'foobar';

            var actual = numberOrDefault(testValue, expected);

            expect(actual).to.equal(expected);
        });
    });


    it('should return given number if it is not null or undefined', () => {
        var expected = 55;

        var actual = numberOrDefault(expected, expected);

        expect(actual).to.equal(expected);
    });

    it('should return the result of executing a function if defaultValue is a function', () => {
        var expected = 21;
        var actual = numberOrDefault(null, (a, b) => {return a * b; }, 7, 3);

        expect(actual).to.equal(expected);
    });
});
