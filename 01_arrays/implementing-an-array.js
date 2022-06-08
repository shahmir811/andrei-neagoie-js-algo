// Creating an array

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(data) {
		this.data[this.length] = data;
		this.length++;
		return this.length;
	}

	pop() {
		let output = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return output;
	}

	delete(index) {
		let item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
		return;
	}
}

const newArray = new MyArray();
newArray.push('Asalam o Alaikum');
newArray.push('Shahmir');
newArray.push('!');
console.log('====================');
console.log(newArray);
newArray.pop();
console.log('====================');
console.log(newArray);
