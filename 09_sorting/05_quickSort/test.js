const quickSort = require('./index');

test('quickSort function exists', () => {
	expect(typeof quickSort).toEqual('function');
});

test('quickSort([2, 3, 4, 1, 2, 3, 4, 12]) returns [1, 2, 2, 3, 3, 4, 4, 12]', () => {
	expect(quickSort([2, 3, 4, 1, 2, 3, 4, 12])).toEqual([1, 2, 2, 3, 3, 4, 4, 12]);
});

test('quickSort([5, 4, 6, 2, 3, 1, 9, 8]) returns [1, 2, 3, 4, 5, 6, 8, 9]', () => {
	expect(quickSort([5, 4, 6, 2, 3, 1, 9, 8])).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
});

test('quickSort([6, 5, 9, 4, 6, 2, 1, 7]) returns [1, 2, 4, 5, 6, 6, 7, 9]', () => {
	expect(quickSort([6, 5, 9, 4, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 6, 7, 9]);
});
