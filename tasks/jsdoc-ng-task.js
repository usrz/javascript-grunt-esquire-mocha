'use strict';

var path = require('path');

/* Our Grunt plugin, simply required from Esquire */
module.exports = function(grunt) {
  var path = require('path');
  var dir = path.dirname(require.resolve('esquire'));
  return require(path.join(dir, "ext", "grunt.js"))(grunt);
};
