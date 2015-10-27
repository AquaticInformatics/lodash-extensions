var expect = require('chai').expect;
var lodashExtensions = require('../source/lodashExtensions');

describe('lodashExtensions', function() {
    [
        'isDefined',
        'isFiniteNumber',
        'numberOrDefault',
        'valueOrDefault'
    ].forEach(function(propertyName) {
        it('should contain ' + propertyName, function() {
            expect(lodashExtensions[propertyName]).to.be.defined;
        });
    });
});
