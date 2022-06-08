const pivot = require('./pivot');

const quickSort = (array, left = 0, right = array.length - 1) => {
	if (left < right) {
		const pivotIndex = pivot(array, left, right);

		// left
		quickSort(array, left, pivotIndex - 1);

		// right
		quickSort(array, pivotIndex + 1, right);
	}

	return array;
};

module.exports = quickSort;
