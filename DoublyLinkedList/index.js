class Node {
	constructor(val) {
		this.next = null;
		this.prev = null;
		this.val = val;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;

		let lastNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = lastNode.prev;
			this.tail.next = null;
			lastNode.prev = null;
		}
		this.length--;
		return lastNode;
	}

	shift() {
		if (this.length === 0) return undefined;

		let oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val) {
		let newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count, current;
		if (index <= this.length / 2) {
			// start from the beginning
			count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			// start from the end
			count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	set(index, val) {
		let node = this.get(index);

		if (!node) {
			return false;
		} else {
			node.val = val;
			return true;
		}
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		let newNode = new Node(val);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;

		(beforeNode.next = newNode), (newNode.prev = beforeNode);
		(newNode.next = afterNode), (afterNode.prev = newNode);
		this.length++;
		return true;
	}

	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;

		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removedNode = this.get(index);
		let beforeNode = removedNode.prev;
		let afterNode = removedNode.next;

		beforeNode.next = removedNode.next;
		afterNode.prev = removedNode.prev;

		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}

	reverse() {
		// SWAP Head and Tail
		let currentNode = this.head;
		this.head = this.tail;
		this.tail = currentNode;

		let nextNode = null;
		let prevNode = null;

		for (let i = 0; i < this.length; i++) {
			nextNode = currentNode.next;
			currentNode.next = prevNode;
			currentNode.prev = nextNode;
			prevNode = currentNode;
			currentNode = nextNode;
		}

		return this;
	}
}

let ll = new DoublyLinkedList();
ll.push(10);
ll.push(20);
ll.push(30);
