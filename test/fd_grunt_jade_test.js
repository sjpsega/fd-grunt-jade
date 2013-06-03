'use strict';

var grunt = require('grunt');
var _ = grunt.util._;

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

exports.fd_grunt_jade = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  test1: function(test) {
    test.expect(1);

    var actual = _.trim(grunt.file.read('tmp/jade.html'));
    var expected = _.trim(grunt.file.read('test/expected/jade.html'));
    test.equal(actual, expected, 'jade.html test');

    test.done();
  },
  test2: function(test) {
    test.expect(1);

    var actual = _.trim(grunt.file.read('tmp/jade2.html'));
    var expected = _.trim(grunt.file.read('test/expected/jade2.html'));
    test.equal(actual, expected, 'jade2.html test');

    test.done();
  },
  test3: function(test) {
    test.expect(1);

    var actual = _.trim(grunt.file.read('tmp/jadeinclude.html'));
    var expected = _.trim(grunt.file.read('test/expected/jadeinclude.html'));
    test.equal(actual, expected, 'jadeinclude.html test');

    test.done();
  },
  test4: function(test) {
    test.expect(1);

    test.ok(!grunt.file.exists("tmp/include/head.html"),'head.html not complie');

    test.done();
  },
  test5: function(test) {
    test.expect(1);

    test.ok(!grunt.file.exists("tmp/include/content.html"),'content.html not complie');

    test.done();
  },
  test6: function(test) {
    test.expect(1);

    var actual = _.trim(grunt.file.read('tmp/jadeinclude2.html'));
    var expected = _.trim(grunt.file.read('test/expected/jadeinclude2.html'));
    test.equal(actual, expected, 'jadeinclude2.html test');

    test.done();
  },
};
