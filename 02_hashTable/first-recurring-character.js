// --- Directions
// Given an array, return the first character that is repeating.

// Examples:
// firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]) -> 2
// firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]) -> 1
// firstRecurringCharacter([2, 3, 4, 5, 6]) -> undefined

const firstRecurringCharacter = input => {
	let hashMap = {};

	for (const element of input) {
		if (hashMap[element]) {
			return element;
		} else {
			hashMap[element] = true;
		}
	}

	return false;
};
