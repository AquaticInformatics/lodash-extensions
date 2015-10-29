var hasValue = require('./hasValue');

module.exports = function(value) {
    return !hasValue(value);
};
