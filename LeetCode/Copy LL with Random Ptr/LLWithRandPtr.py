class Node:
    def __init__(self, data=None, next=None, randomPointer=None):
        self.data = data
        self.next = next
        self.randomPointer = randomPointer

    def __hash__(self):
        return hash((self.data, self.next, self.randomPointer))

    def __eq__(self, other):
        print(self.data)
        isEqual = self.data == other.data
        # print(type(other))
        if (self.next != None and other.next != None):
            isEqual = self.next.data == other.next.data
        elif (self.next == None and other.next != None) or (self.next != None and other.next == None):
            return False

        if (self.randomPointer != None and other.randomPointer != None):
            isEqual = self.randomPointer.data == other.randomPointer.data
        elif (self.randomPointer == None and other.randomPointer != None) or (self.randomPointer != None and other.randomPointer == None):
            return False

        return isEqual

    def __ne__(self, other):
        return not(self == other)


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

node1 = Node(data=1)
copyNode1 = Node(data=1)
node2 = Node(data=2)
node1.next = node2
list.head.next = node1

list.listprint()

# print(hash(node1) == hash(node2))
# print(hash(node1) == hash(copyNode1))
print(node1 == node2)
print(node1 == copyNode1)
