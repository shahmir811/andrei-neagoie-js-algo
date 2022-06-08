// MergeSort Pseudocode
// 1 - Break up the array into halves until you have arrays that are empty or have one element only.
// 2 - Once you have smaller sorted arrays, merge those arrays with the other sorted arrays until you are back at the
// full length of the array.
// 3 - Once the array has been merged back together, return the merged (and sorted) array.

const mergeTwoSortedArrays = require('./mergeTwoSortedArrays');

const mergeSort = array => {
	if (array.length <= 1) return array;

	let mid = Math.floor(array.length / 2);

	let left = mergeSort(array.slice(0, mid));
	let right = mergeSort(array.slice(mid));

	return mergeTwoSortedArrays(left, right);
};

module.exports = mergeSort;
