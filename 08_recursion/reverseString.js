const reverseString = str => {
	let resultStr = '';

	const helper = arr => {
		if (arr.length) return resultStr;
		let pop = arr.pop();
		resultStr += pop;
		return helper(arr);
	};

	helper(str.split(''));
	return resultStr;
};

reverseString('yoyo mastery');
