var isNotNullOrUndefined = require('./isNotNullOrUndefined');
var isEmptyString = require('./isEmptyString');

module.exports = function(value) {
    return isNotNullOrUndefined(value) && !isEmptyString(value);
};
