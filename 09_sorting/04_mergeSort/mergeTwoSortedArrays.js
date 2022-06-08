// PSEUDOCODE for merging two sorted arrays
// 1 - Create an empty array named results, take a look at the smallest values of each input array.
//      a - If the value in the first array is smaller than the value in the second array, push the value of the first
//          array into our results array and move on to the next value of the first array.
//      b - If the value in the first array is greater than the value in the second array, push the value of the second
//          array into our results array and move on to the next value of the second array.
//      c - Once we exhaust one array, push all the remaining values of the other array into the results array.

const mergeTwoSortedArrays = (arr1, arr2) => {
	const results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
};

// const output = mergeTwoSortedArrays([1, 4, 10, 15, 16], [2, 6, 8, 11, 13, 17, 21, 25]);
// console.log(output);

module.exports = mergeTwoSortedArrays;
