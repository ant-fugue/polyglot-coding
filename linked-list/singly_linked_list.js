class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  addNode(data) {
    let newNode = new ListNode(data)
    if (this.head === null) this.head = newNode
    else {
      // search for last node
      // add new node to its node
      let lastNode = this.head
      if (lastNode) {
        while(lastNode.next) {
          lastNode = lastNode.next
        }
      }
      lastNode.next = newNode
    }
  }

  size() {
    let count = 0
    let node = this.head
    // while there is a node, count up and point to next node
    // this loop finishes when node.next is null
    while(node) {
      count++
      node = node.next
    }
    return count
  }
  // the initial node is assigned in this.head
  // so, by clearing it, you can clear all elements in the list
  clear() {
    this.head = null
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let lastNode = this.head
    if (lastNode) {
      while(lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

}

// let list = new LinkedList()

// console.log(list)
// list.addNode(2)
// list.addNode(3)
// list.addNode(5)
// console.log(list)
// console.log(list.head)
// console.log(list.head.data)
// console.log(list.head.next)
// console.log(list.head.next.data)

// console.log(list.size())
// console.log(list.getFirst())
// console.log(list.getLast())
// list.clear()
// console.log(list.size())
