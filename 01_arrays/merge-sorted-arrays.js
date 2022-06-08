// --- Directions
// Given two sorted array, merge them in one new array.

// --- Examples
//   mergeSortedArray([0, 3, 4, 31], [4, 6, 30]) -> [0, 3, 4, 4, 6, 30, 31]

const mergeSortedArray = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	const result = [];

	if (arr1.length === 0) return arr2;
	if (arr2.length === 0) return arr1;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result;
};
