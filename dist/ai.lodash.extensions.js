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
module.exports = function(value) {
    return typeof value !== 'undefined';
};

},{}],2:[function(require,module,exports){
module.exports = {
    isDefined: require('./isDefined'),
    numberOrDefault: require('./numberOrDefault'),
    valueOrDefault: require('./valueOrDefault')
};

},{"./isDefined":1,"./numberOrDefault":3,"./valueOrDefault":4}],3:[function(require,module,exports){
module.exports = function(value, defaultValue) {
    if (typeof value === 'number' && isFinite(value)) {
        return value;
    }
    return defaultValue;
};

},{}],4:[function(require,module,exports){
var isDefined = require('./isDefined');

module.exports = function(value, defaultValue) {
    if (isDefined(value) && value !== null) {
        return value;
    }
    return defaultValue;
};

},{"./isDefined":1}]},{},[2])(2)
});