import test from 'ava';
// Translations
import sameKeys from './fixtures/same-keys';
import differentKeys from './fixtures/different-keys';
import validi18n from '.';

const I18n = {
	translations: {
		samesame: {...sameKeys},
		different: {...differentKeys}
	}
};

const invalidI18nDiff = {a: {aa: 1}, b: {bb: 2}};
const invalidI18nSame = {a: {aa: 1}, b: {aa: 2}};

test('argument type', t => {
	const err = t.throws(() => {
		validi18n(123);
	}, TypeError);
	t.is(err.message, 'Expected an object, got number');
});

test('dummy object with same keys', t => {
	t.true(validi18n(invalidI18nSame));
});

test('dummy object with diff keys', t => {
	t.false(validi18n(invalidI18nDiff));
});

test('argument type in validi18n.diff', t => {
	const err = t.throws(() => {
		validi18n.diff(invalidI18nDiff);
	}, TypeError);
	t.is(err.message, 'Expected an object, got undefined');
});

test('empty object', t => {
	t.true(validi18n({}));
});

test('same translations', t => {
	t.true(validi18n(I18n.translations.samesame));
});

test('different translations keys in translations', t => {
	t.false(validi18n(I18n.translations.different));
});

test('differences', t => {
	t.deepEqual(
		validi18n.diffs(...validi18n.formatTranslations(I18n.translations)),
		{
			samesame: [
				'de.form.validation.tooShort',
				'de.form.validation.tooLong',
				'de.form.validation.required',
				'de.form.validation.notValid'
			],
			different: []
		}
	);
});
