var isEmptyString = require('./isEmptyString');

module.exports = function(value) {
    return !isEmptyString(value);
};
