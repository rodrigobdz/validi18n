# validi18n [![codecov](https://codecov.io/gh/rodrigobdz/validi18n/badge.svg?branch=master)](https://codecov.io/gh/rodrigobdz/validi18n?branch=master)

> Ensure consistent keys across i18n translations

## Install

```sh
$ npm install validi18n
```

## Usage

```js
const validi18n = require("validi18n");

validi18n("unicorns");
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

```sh
$ npm install --global validi18n
```

```sh
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

## Related

- [deep-keys](https://github.com/a8m/deep-keys) - Helper for comparison of i18n objects

## License

[MIT](license) © [Rodrigo Bermudez Schettino](http://rodrigobdz.github.io)
