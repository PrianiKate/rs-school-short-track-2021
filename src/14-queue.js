const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  get size() {
    return this.top;
  }

  enqueue(element) {
    const node = new ListNode(element);
    node.next = null;
    this.data.push(element);
    this.top++;
  }

  dequeue() {
    const node = this.data.shift();
    this.top--;
    return node;
  }
}

module.exports = Queue;
