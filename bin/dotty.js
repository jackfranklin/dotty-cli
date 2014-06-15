#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var dotty = require('../index.js');
var pkg = require('../package.json');

var getTemplateName = function(param) {
  return param === true ? "default" : param;
};

dotty.init({
  templates: argv.templates || "~/.dotty"
});

if(argv.v || argv.version) {
  console.log(pkg.version);
  return;
}

if(argv.h || argv.help) {
  console.log([
    'Dotty',
    pkg.description,
    '',
    'Filetypes:',
    '  .editorconfig: --ec',
    '  .gitignore: --gi',
    '  .jshintrc: --jh',
    '  .travis.yml: --tv',
    '',
    'Usage:',
    '  dotty --<flag> <template>',
    '',
    'Examples:',
    '  Generate a .gitignore with default template:',
    '    dotty --gi',
    '  Generate a .gitignore with specific template:',
    '    dotty --gi node'
  ].join('\n'));
  return;
}

var fileMaps = {
  'ec': '.editorconfig',
  'tv': '.travis.yml',
  'gi': '.gitignore',
  'jh': '.jshintrc'
};

for(var key in fileMaps) {
  if(argv[key]) {
    dotty.createFile(fileMaps[key], getTemplateName(argv[key]));
  }
};
