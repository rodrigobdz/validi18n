#!/usr/bin/env node
'use strict';
const meow = require('meow');
const validi18n = require('.');

const cli = meow(`
	Usage
	  $ validi18n [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ validi18n
	  unicorns & rainbows
	  $ validi18n ponies
	  ponies & rainbows
`);

console.log(validi18n(cli.input[0] || 'unicorns'));
