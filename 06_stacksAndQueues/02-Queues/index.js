class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		let newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this;
	}

	dequeue() {
		if (!this.first) return undefined;

		let removedNode = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = removedNode.next;
			removedNode.next = null;
		}

		this.size--;
		return removedNode;
	}

	peek() {
		return this.first;
	}

	print() {
		let currentNode = this.first;
		let arr = [];

		while (currentNode) {
			arr.push(currentNode.val);
			currentNode = currentNode.next;
		}

		return arr;
	}
}

module.exports = Queue;

let q3 = new Queue();
q3.enqueue(5);
q3.enqueue(10);
q3.enqueue(15);
q3.enqueue(20);
q3.enqueue(25);
