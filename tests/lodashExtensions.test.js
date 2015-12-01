var expect = require('chai').expect;
var lodashExtensions = require('../source/lodashExtensions');

describe('lodashExtensions', () => {
    [
        'hasValue',
        'isDefined',
        'isEmptyString',
        'isNotNullOrUndefined',
        'isNullOrUndefined',
        'isStringWithValue',
        'isValueMissing',
        'numberOrDefault',
        'stringOrDefault',
        'valueOrDefault'
    ].forEach(propertyName => {
        it('should contain ' + propertyName, () => {
            expect(lodashExtensions[propertyName]).to.exist;
        });
    });
});
