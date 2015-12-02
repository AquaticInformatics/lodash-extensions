var isFunction = require('lodash/lang/isFunction');
var isNotNullOrUndefined = require('./isNotNullOrUndefined');
var get = require('lodash/object/get');

module.exports = function(source, path, defaultValue) {
    var value = get(source, path);
    if(isNotNullOrUndefined(value)) {
        return value;
    }
    if(isFunction(defaultValue)) {
        return defaultValue();
    }
    return defaultValue;
};
