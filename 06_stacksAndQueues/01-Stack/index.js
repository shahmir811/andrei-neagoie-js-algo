// Push() and Pop() methods in Stacks are similar to unshift() and shift() methods in SinglyLinkedList

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		let newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let oldFirst = this.first;
			this.first = newNode;
			this.first.next = oldFirst;
		}

		this.size++;
		return this.size;
	}

	pop() {
		if (this.size === 0) return null;

		const temp = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = temp.next;
			temp.next = null;
		}

		this.size--;
		return temp.val;
	}

	peek() {
		return this.first;
	}

	print() {
		let arr = [];
		let current = this.first;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

module.exports = Stack;

let st = new Stack();
st.push(5);
st.push(10);
st.push(15);
st.push(20);
st.push(25);
