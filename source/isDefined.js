(function() {
    'use strict';

    var isUndefined = require('lodash/lang/isUndefined');

    module.exports = function(value) {
        return !isUndefined(value);
    };

})();
