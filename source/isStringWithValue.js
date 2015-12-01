var isString = require('lodash/lang/isString');
var isEmptyString = require('./isEmptyString');

module.exports = function(value) {
    return isString(value) && !isEmptyString(value);
};
