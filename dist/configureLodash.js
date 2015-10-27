if(typeof lodash !== 'undefined') {
    lodash.ai = ai.lodashExtensions;
    lodash.mixin(ai);
} else if(typeof _ !== 'undefined') {
    _.ai = ai.lodashExtensions;
    _.mixin(ai);
}
