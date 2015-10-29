# AI Extensions for Lodash library
[![travis build](https://img.shields.io/travis/AquaticInformatics/lodash-extensions.svg)](https://travis-ci.org/AquaticInformatics/lodash-extensions) [![Apache license](http://img.shields.io/badge/license-APACHE2-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)

A set of JavaScript utility functions that can be used on their own or as an extension to [Lo-Dash](https://github.com/lodash/lodash).

## Dependencies
This module uses a couple of light weight lodash functions minimizing amount of duplicated code when creating distribution files using browserify.

## Motivation
To avoid subtle bugs associated with checking for truthy/falsy values we want to use explicit conditional checks. To make the code more readable we want to have inverse of functions to avoid using !.  We also want to have a couple of useful type specific value checking functions instead of using ternary operators.

## Usage

### Install from bower
    bower install ai-lodash-extensions
    Include 'ai.lodash.extensions.js' or 'ai.lodash.extensions.min.js'  in your HTML file.  
    The library exposes 'ai.lodashExtensions' as a global variable.  If you wish you can include 'configureLodashMinimal.js'  in your HTML file to add '_.ai' to host the extension library, or 'configureLodash.js' to also mixin all non-conflicting functions onto lodash (_).

### Install from npm
    npm install ai-lodash-extensions
    Example:
    var ai = require('lodashExtensions');
    var foo = ai.valueOrDefault(someVariable, () => { return 'foobar'; });
    

## Documentation

### hasValue(value)
Checks if value is not null and not undefined and not an empty string.  Useful for validating forms.

### isDefined(value)
Returns true if value is not undefined, false otherwise.

### isEmptyString(value)
Returns true if value is ''.  Note, it returns false for null and undefined.

### isNotEmptyString(value)
Returns negation of ``` isEmptyString() ```.

### isNotNullOrUndefined(value)
Returns negation of ``` isNullOrUndefined() ```.

### isNullOrUndefined(value)
Returns true if value is either null or undefined

### isValueMissing(value)
returns negation of ``` hasValue() ```.

### numberOrDefault(value, defaultValue, ...)
Returns value if value is a finite number (not NaN/Infinity/-Infinity) otherwise, if defaultValue is a function it will return the result of calling it with remainder of arguments or defaultValue.

### stringOrDefault(value, defaultValue, ...)
Returns value if value is a non empty string otherwise, if defaultValue is a function it will return the result of calling it with remainder of arguments or defaultValue.

### valueOrDefault(value, defaultValue, ...)
Return value if value is not null or undefined otherwise, if defaultValue is a function it will return the result of calling it with remainder of arguments or defaultValue.
