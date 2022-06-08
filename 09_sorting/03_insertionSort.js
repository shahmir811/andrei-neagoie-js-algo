// Time complexity - O(n^2)

const insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		let currVal = arr[i];
		let index = i;
		for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
			arr[j + 1] = arr[j];
			index = j;
		}
		arr[index] = currVal;
	}
	return arr;
};
