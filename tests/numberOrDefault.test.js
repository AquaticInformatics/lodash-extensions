var expect = require('chai').expect;
var numberOrDefault = require('../source/numberOrDefault');

describe('numberOrDefault', function() {

    [
        undefined,
        null,
        NaN,
        Infinity,
        -Infinity,
        {},
        'not a number',
        '12'
    ].forEach(function(testValue) {
        it('should return default value if given ' + testValue, function() {
            var expected = 'foobar';

            var actual = numberOrDefault(testValue, expected);

            expect(actual).to.equal(expected);
        });
    });


    it('should return given number if it is not null or undefined', function() {
        var expected = 55;

        var actual = numberOrDefault(expected, expected);

        expect(actual).to.equal(expected);
    });
});
