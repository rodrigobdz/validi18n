# validi18n [![Build Status](https://travis-ci.org/rodrigobdz/validi18n.svg?branch=master)](https://travis-ci.org/rodrigobdz/validi18n) [![codecov](https://codecov.io/gh/rodrigobdz/validi18n/badge.svg?branch=master)](https://codecov.io/gh/rodrigobdz/validi18n?branch=master)

> Ensure consistent keys across i18n translations

## Install

```sh
$ npm install validi18n
```

## Usage

```js
const validi18n = require('validi18n')

validi18n({ en: { save: 'Save' }, de: { save: 'Speichern' } })
//=> true

validi18n({ en: { save: 'Save' }, de: {} })
//console error => { en: ['save'], de: [] }
//=> false
```

## API

### validi18n(translations)

#### translations

Type: `Object`

Object with translations for each language supported.

## Related

- [deep-keys](https://github.com/a8m/deep-keys) - Helper for comparison of i18n objects

## License

[MIT](license) © [Rodrigo Bermudez Schettino](http://rodrigobdz.github.io)
