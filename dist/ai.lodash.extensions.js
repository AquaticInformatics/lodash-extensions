// Copyright 2015 Aquatic Informatics Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ai || (g.ai = {})).lodashExtensions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],2:[function(require,module,exports){
var isObject = require('./isObject');

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

module.exports = isFunction;

},{"./isObject":3}],3:[function(require,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],4:[function(require,module,exports){
var isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
}

module.exports = isString;

},{"../internal/isObjectLike":1}],5:[function(require,module,exports){
var isNotNullOrUndefined = require('./isNotNullOrUndefined');
var isNotEmptyString = require('./isNotEmptyString');

module.exports = function(value) {
    return isNotNullOrUndefined(value) && isNotEmptyString(value);
};

},{"./isNotEmptyString":8,"./isNotNullOrUndefined":9}],6:[function(require,module,exports){
module.exports = function(value) {
    return typeof value !== 'undefined';
};

},{}],7:[function(require,module,exports){
module.exports = function(value) {
    return typeof value === 'string' && value.length === 0;
};

},{}],8:[function(require,module,exports){
var isEmptyString = require('./isEmptyString');

module.exports = function(value) {
    return !isEmptyString(value);
};

},{"./isEmptyString":7}],9:[function(require,module,exports){
var isNullOrUndefined = require('./isNullOrUndefined');

module.exports = function(value) {
    return !isNullOrUndefined(value);
};

},{"./isNullOrUndefined":10}],10:[function(require,module,exports){
module.exports = function(value) {
    return typeof value === 'undefined' || value === null;
};

},{}],11:[function(require,module,exports){
var hasValue = require('./hasValue');

module.exports = function(value) {
    return !hasValue(value);
};

},{"./hasValue":5}],12:[function(require,module,exports){
module.exports = {
    hasValue: require('./hasValue'),
    isDefined: require('./isDefined'),
    isEmptyString: require('./isEmptyString'),
    isNotEmptyString: require('./isNotEmptyString'),
    isNotNullOrUndefined: require('./isNotNullOrUndefined'),
    isNullOrUndefined: require('./isNullOrUndefined'),
    isValueMissing: require('./isValueMissing'),
    numberOrDefault: require('./numberOrDefault'),
    stringOrDefault: require('./stringOrDefault'),
    valueOrDefault: require('./valueOrDefault')
};

},{"./hasValue":5,"./isDefined":6,"./isEmptyString":7,"./isNotEmptyString":8,"./isNotNullOrUndefined":9,"./isNullOrUndefined":10,"./isValueMissing":11,"./numberOrDefault":13,"./stringOrDefault":14,"./valueOrDefault":15}],13:[function(require,module,exports){
var isFunction = require('lodash/lang/isFunction');

module.exports = function(value, defaultValue) {
    if (typeof value === 'number' && isFinite(value)) {
        return value;
    }
    if(isFunction(defaultValue)) {
        return defaultValue.apply(null, Array.prototype.slice.call(arguments, 2));
    }
    return defaultValue;
};

},{"lodash/lang/isFunction":2}],14:[function(require,module,exports){
var isString = require('lodash/lang/isString');
var isFunction = require('lodash/lang/isFunction');

module.exports = function(value, defaultValue) {
    if (isString(value) && value.length > 0) {
        return value;
    }
    if(isFunction(defaultValue)) {        
        return defaultValue.apply(null, Array.prototype.slice.call(arguments, 2));
    }
    return defaultValue;
};

},{"lodash/lang/isFunction":2,"lodash/lang/isString":4}],15:[function(require,module,exports){
var isNotNullOrUndefined = require('./isNotNullOrUndefined');
var isFunction = require('lodash/lang/isFunction');

module.exports = function(value, defaultValue) {
    if (isNotNullOrUndefined(value)) {
        return value;
    }
    if(isFunction(defaultValue)) {
        return defaultValue.apply(null, Array.prototype.slice.call(arguments, 2));
    }
    return defaultValue;
};

},{"./isNotNullOrUndefined":9,"lodash/lang/isFunction":2}]},{},[12])(12)
});