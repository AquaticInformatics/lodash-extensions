(function() {
    'use strict';

    var isDefined = require('./isDefined');
    var isNull = require('lodash/lang/isNull');

    module.exports = function(value, defaultValue) {
        if (isDefined(value) && !isNull(value)) {
            return value;
        }
        return defaultValue;
    };

})();
