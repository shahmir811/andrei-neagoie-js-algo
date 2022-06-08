const fibonacciRecusive = n => {
	if (n <= 2) return 1;

	return fibonacciRecusive(n - 1) + fibonacciRecusive(n - 2);
};

const fibonacciIterative = n => {
	const fibNums = [0, 1, 1];
	let i = 3;

	while (i <= n) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
		i++;
	}

	return fibNums[n];
};
