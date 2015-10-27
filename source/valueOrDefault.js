var isDefined = require('./isDefined');

module.exports = function(value, defaultValue) {
    if (isDefined(value) && value !== null) {
        return value;
    }
    return defaultValue;
};
