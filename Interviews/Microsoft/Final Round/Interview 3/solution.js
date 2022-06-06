// Michael Chan


class LinkedList {
  constructor(head = null) {
    this.head = head
    this.tail = head
  }

  add(node) {
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.setNext(node)
      this.tail = this.tail.next
    }
  }
}

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }

  setNext(node) {
    this.next = node
  }
}

// node5 = new Node(5)
// node4 = new Node(4, node5)
// node3 = new Node(3, node4)
// node2 = new Node(2, node3)
// node1 = new Node(1, node2)
node5 = new Node(5)
node4 = new Node(4)
node3 = new Node(3)
node2 = new Node(2)
node1 = new Node(1)

linkedList = new LinkedList(node1)
linkedList.add(node2)
linkedList.add(node3)
linkedList.add(node4)
linkedList.add(node5)

// 1->2->3->4->5-> null
// 1->3->5-> 2 -> 4-> 5 -> null
// evenNodeStart = 2 -> 4-> 5 ->
// currEvenNode

const reorderLL = (ll) => {
  let prev_node = null
  let curr_node = ll.head
  let i = 1
  let evenNodeStart = null
  let currEvenNode = null
  while (curr_node !== null) {
    next_node = curr_node.next

    // if (i===2 && curr_node.next === null){
    //     break
    // }

    if (i % 2 == 0) {
      if (evenNodeStart === null) {
        evenNodeStart = curr_node
        prev_node.next = curr_node.next
        curr_node.next = null
        currEvenNode = curr_node
      } else {
        currEvenNode.setNext(curr_node)
        prev_node.next = curr_node.next
        curr_node.next = null
      }
    }

    prev_node = curr_node
    curr_node = next_node
    i++
  }

  // evenCurrNode = evenNodeStart
  // console.log(evenNodeStart)
  // while ( evenCurrNode !== null) {
  //     console.log(evenCurrNode.val)
  //     evenCurrNode = evenCurrNode.next
  // }

  ll.add(evenNodeStart)

  return ll
}

newReorderedLL = reorderLL(linkedList)

// oneNode = new Node(5)
// oneNodeLL = new LinkedList(oneNode)
// oneNodeLL.add(new Node(10))

// // 1 -> 2
// newReorderedLL = reorderLL(oneNodeLL)
// console.log(newReorderedLL)

curr_node = newReorderedLL.head
while (curr_node !== null) {
  console.log(curr_node.val)
  curr_node = curr_node.next
}