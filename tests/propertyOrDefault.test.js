var expect = require('chai').expect;
var propertyOrDefault = require('../source/propertyOrDefault');

describe('propertyOrDefault', () => {

    [
        undefined,
        null
    ].forEach(testValue => {
        it('should return default value if given ' + testValue, () => {
            var expected = 'foobar';

            var actual = propertyOrDefault({foo:testValue}, 'foo', expected);

            expect(actual).to.equal(expected);
        });
    });

    it('should return property value if it is not null or undefined', () => {
        var expected = 'bam';

        var actual = propertyOrDefault({foo: {bar: {baz:'bam'}}}, 'foo.bar.baz', 'invalid');

        expect(actual).to.equal(expected);
    });


    it('should return the result of executing a function if defaultValue is a function', () => {
        var expected = 33;
        var actual = propertyOrDefault({life:42}, 'missingProperty.path', () => expected);

        expect(actual).to.equal(expected);
    });
});
