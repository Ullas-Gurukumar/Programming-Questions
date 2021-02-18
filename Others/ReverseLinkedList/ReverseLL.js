class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }

  reverse(newNextVal) {
    if (this.next == null) {
      this.next = newNextVal
      return this
    }

    var head = this.next.reverse(this)
    this.next = newNextVal
    return head
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  print() {
    var currNode = this.head
    console.log('Head\n')
    while (currNode != null) {
      console.log(currNode.val)
      currNode = currNode.next
    }
    console.log('\nEnd')
  }

  reverse() {
    this.head = this.head.reverse(null)
  }
}

var linkedList = new LinkedList(new Node(Math.floor(Math.random() * 100)))
var arrayOfLL = [linkedList.head.val]
var prevNode = linkedList.head
for (var i = 0; i < 10; i++) {
  var newNode = new Node(Math.floor(Math.random() * 100))
  prevNode.next = newNode
  prevNode = newNode
  arrayOfLL.push(newNode.val)
}

console.log(arrayOfLL)

linkedList.reverse()
linkedList.print()
