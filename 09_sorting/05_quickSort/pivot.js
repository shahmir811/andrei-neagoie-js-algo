// Pivot PSEUDOCODE
// 1 - It will accept three arguments: an array, a start index, and an end index (these can default to 0 and
// the array length minus 1, respectively)
// 2 - Grab the pivot from the start of the array
// 3 - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// 4 - Loop through the array from the start until the end
//     a - If the pivot is greater than the current element, increment the pivot index variable and then swap the
//         current element with the element at the pivot index
// 5 - Swap the starting element (i.e. the pivot) with the pivot index
// 6 - Return the pivot index

const pivot = (arr, start = 0, end = arr.length - 1) => {
	const swap = (arr, i, j) => {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;

		return arr;
	};

	// We are assuming the pivot is always the first element
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	// Swap the pivot from the start the swapPoint
	swap(arr, start, swapIdx);
	return swapIdx;
};

module.exports = pivot;
