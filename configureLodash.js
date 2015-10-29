if(typeof _ !== 'undefined') {
    _.ai = ai.lodashExtensions;

    var mixinObject = {};
    _.each(_.keys(ai.lodashExtensions), function(methodName) {
        if(!_.has(_, methodName)) {
            mixinObject[methodName] = ai.lodashExtensions[methodName];
        }
    });

    if(!_.isEmpty(mixinObject)) {
        _.mixin(mixinObject);
    }
}
