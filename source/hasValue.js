var isNotNullOrUndefined = require('./isNotNullOrUndefined');
var isNotEmptyString = require('./isNotEmptyString');

module.exports = function(value) {
    return isNotNullOrUndefined(value) && isNotEmptyString(value);
};
