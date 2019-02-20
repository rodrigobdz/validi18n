import test from 'ava';
// Import sinon from 'sinon';
// Translations
import sameKeys from './test/helpers/same-keys';
import differentKeys from './test/helpers/different-keys';
import validi18n from '.';

const I18n = {
	translations: {
		samesame: {...sameKeys},
		different: {...differentKeys}
	}
};

test('same translations', t => {
	t.true(validi18n(I18n.translations.samesame));
});

test('different translations keys in translations', t => {
	t.false(validi18n(I18n.translations.different));
});

// Test('validi18n with different translations', t => {
// 	// Spy on console.error
// 	t.context.error = console.error;
// 	console.error = sinon.spy();

// 	t.false(validi18n(I18n.translations.different));
// 	t.true(console.error.calledOnce);

// 	// Restore console.error to original value
// 	console.error = t.context.error;
// });
