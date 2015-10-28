var expect = require('chai').expect;
var lodashExtensions = require('../source/lodashExtensions');

describe('lodashExtensions', function() {
    [
        'isDefined',
        'isEmptyString',
        'isNotEmptyString',
        'isNotNullOrUndefined',
        'isNullOrUndefined',
        'numberOrDefault',
        'stringOrDefault',
        'valueOrDefault'
    ].forEach(function(propertyName) {
        it('should contain ' + propertyName, function() {
            expect(lodashExtensions[propertyName]).to.exist;
        });
    });
});
