'use strict';

var uId = require('./angular-uid');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports['angular-uid'] = {
    setUp: function (done) {
        // setup here
        done();
    },
    'no args': function (test) {
        test.expect(5);
        // tests here
        test.equal(uId(), '001', 'should be 001');
        test.equal(uId(), '002', 'should be 002');
        test.equal(uId(), '003', 'should be 003');
        test.equal(uId(), '004', 'should be 004');
        test.equal(uId(), '005', 'should be 005');

        test.done();
    }
};
