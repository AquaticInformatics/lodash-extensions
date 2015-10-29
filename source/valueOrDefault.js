var isNotNullOrUndefined = require('./isNotNullOrUndefined');
var isFunction = require('lodash/lang/isFunction');

module.exports = function(value, defaultValue) {
    if (isNotNullOrUndefined(value)) {
        return value;
    }
    if(isFunction(defaultValue)) {
        return defaultValue.apply(null, Array.prototype.slice.call(arguments, 2));
    }
    return defaultValue;
};
