var isNullOrUndefined = require('./isNullOrUndefined');

module.exports = function(value) {
    return !isNullOrUndefined(value);
};
