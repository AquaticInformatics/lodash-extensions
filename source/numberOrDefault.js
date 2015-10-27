module.exports = function(value, defaultValue) {
    if (typeof value === 'number' && isFinite(value)) {
        return value;
    }
    return defaultValue;
};
