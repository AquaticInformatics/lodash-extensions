var isString = require('lodash/lang/isString');
var isFunction = require('lodash/lang/isFunction');

module.exports = function(value, defaultValue) {
    if (isString(value) && value.length > 0) {
        return value;
    }
    if(isFunction(defaultValue)) {
        return defaultValue();
    }
    return defaultValue;
};
