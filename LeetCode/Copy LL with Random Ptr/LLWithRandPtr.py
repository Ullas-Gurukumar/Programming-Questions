class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None
        self.randomPointer = None


class LinkedList:
    def __init__(self):
        self.head = None

    def listprint(self):
        printval = self.head
        while printval is not None:
            print(printval.data)
            # print(printval.randomPointer)
            printval = printval.next


list = LinkedList()
list.head = Node(0)

node1 = Node(1)
node2 = Node(2)
node1.next = node2
list.head.next = node1

list.listprint()
