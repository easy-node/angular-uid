(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * angular-uid
 * https://github.com/easy-node/angular-uid
 *
 * Copyright (c) 2014 Huei Tan
 * Licensed under the MIT license.
 */

'use strict';

var nextUid = (function () {
    var uid = ['0', '0', '0'];
    return function () {
        var index = uid.length;
        var digit;

        while(index) {
            index--;
            digit = uid[index].charCodeAt(0);

            if (digit == 57 /*'9'*/) {
                uid[index] = 'A';
                return uid.join('');
            }

            if (digit == 90  /*'Z'*/) {
                uid[index] = '0';
            } else {
                uid[index] = String.fromCharCode(digit + 1);
                return uid.join('');
            }
        }

        uid.unshift('0');

        return uid.join('');
    }
})();

module.exports = nextUid;

},{}]},{},[1])