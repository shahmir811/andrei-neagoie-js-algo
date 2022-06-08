const bubbleSort = array => {
	let noSwaps;

	for (let i = 0; i < array.length; i++) {
		noSwaps = true;
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				// SWAP
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				noSwaps = false;
			}
		}

		if (noSwaps) break;
	}
};
