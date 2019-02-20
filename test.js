import test from 'ava';
import validi18n from '.';

test('title', t => {
	const err = t.throws(() => {
		validi18n(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(validi18n('unicorns'), 'unicorns & rainbows');
});
