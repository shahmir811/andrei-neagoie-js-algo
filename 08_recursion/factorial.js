const findFactorialRecursive = n => {
	if (n === 1) return 1;

	return n * findFactorialRecursive(n - 1);
};

const findFactorialIterative = n => {
	let result = 1;

	for (let i = n; i > 0; i--) {
		result = result * i;
	}

	return result;
};
