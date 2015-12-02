var isFunction = require('lodash/lang/isFunction');

module.exports = function(value, defaultValue) {
    if (typeof value === 'number' && isFinite(value)) {
        return value;
    }
    if(isFunction(defaultValue)) {
        return defaultValue();
    }
    return defaultValue;
};
