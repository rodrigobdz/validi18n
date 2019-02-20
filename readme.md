# validi18n [![Build Status](https://travis-ci.com/rodrigobdz/validi18n.svg?branch=master)](https://travis-ci.com/rodrigobdz/validi18n) [![codecov](https://codecov.io/gh/rodrigobdz/validi18n/badge.svg?branch=master)](https://codecov.io/gh/rodrigobdz/validi18n?branch=master)

> Compare keys in i18n translations


## Install

```
$ npm install validi18n
```


## Usage

```js
const validi18n = require('validi18n');

validi18n('unicorns');
//=> 'unicorns & rainbows'
```


## API

### validi18n(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `Object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global validi18n
```

```
$ validi18n --help

  Usage
    validi18n [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ validi18n
    unicorns & rainbows
    $ validi18n ponies
    ponies & rainbows
```


## License

MIT © [Rodrigo Bermudez Schettino](http://rodrigobdz.github.io)
