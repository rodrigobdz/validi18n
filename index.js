'use strict';

const deepKeys = require('deep-keys');

const NO_DIFF = null;

/**
 * Parse translations and return language key together with translations.
 * @param {Object} o translations as values inside language key
 * @returns {Array<String, Object>} Locale and translations
 */
function getTranslations(o) {
	if (typeof o !== 'object') {
		throw new TypeError(`Expected an object, got ${typeof o}`);
	}

	const locale = Object.keys(o)[0];
	return [locale, o[locale]];
}

/**
 * Returns distinct keys between both objects.
 * @param {Object} a translations
 * @param {Object} b translations
 * @returns {Object} Differences ordered by language
 */
function diff(a, b) {
	const [aLocale, aTranslations] = getTranslations(a);
	const [bLocale, bTranslations] = getTranslations(b);

	// Get nested keys of object in form of array
	// Example:
	// deepKeys({a:{b:{c:1}}}) returns ['a.b.c']
	const deepA = deepKeys(aTranslations);
	const deepB = deepKeys(bTranslations);

	const missingInB = deepA.filter(x => deepB.indexOf(x) === -1);
	const missingInA = deepB.filter(x => deepA.indexOf(x) === -1);

	if (missingInA.length === 0 && missingInB.length === 0) {
		return NO_DIFF;
	}

	return {[aLocale]: missingInB, [bLocale]: missingInA};
}

/**
 * Returns differences between multiple objects
 * @param  {Array<Object>} objects Array of translations for each language
 * supported
 * @returns {Object} Differences ordered by language
 */
function diffs(...objects) {
	let results = {};

	objects.forEach(o1 => {
		objects.forEach(o2 => {
			const diffBetweenObjects = diff(o1, o2);
			if (diffBetweenObjects !== NO_DIFF) {
				results = {...results, ...diffBetweenObjects};
			}
		});
	});

	return results;
}

/**
 * Transforms container of translations from object to array.
 * @param {Object} translations Object with translations for each language
 * @returns {Array<Object>} Array of translations ordered by language
 * Example: [ { en: { form: 'Form' } }, { de: { form: 'Form' } } ]
 */
function formatTranslations(translations) {
	const formattedTranslations = [];
	Object.keys(translations).forEach(key => {
		formattedTranslations.push({[key]: translations[key]});
	});
	return formattedTranslations;
}

/**
 * Validates that no translations are missing.
 * @param {Object} translations Object with translations for each language
 * supported
 * Example: {en: {save: 'Save'}, de: {save: 'Speichern'}}
 * @returns {boolean} true if all translations contain the same keys
 */
function validi18n(translations) {
	if (typeof translations !== 'object') {
		throw new TypeError(`Expected an object, got ${typeof translations}`);
	}

	const formattedTranslations = formatTranslations(translations);

	const missingTranslations = diffs(...formattedTranslations);
	const ret = JSON.stringify(missingTranslations) === JSON.stringify({});

	if (!ret) {
		console.error(missingTranslations);
	}

	return ret;
}

module.exports = validi18n;
module.exports.diffs = diffs;
module.exports.diff = diff;
module.exports.formatTranslations = formatTranslations;
module.exports.getTranslations = getTranslations;
