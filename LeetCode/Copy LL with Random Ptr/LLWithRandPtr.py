import array
import random


class Node:
    def __init__(self, data=None, next=None, randomPointer=None):
        self.data = data
        self.next = next
        self.randomPointer = randomPointer

    def __hash__(self):
        return hash((self.data, self.next, self.randomPointer))

    def __eq__(self, other):
        if isinstance(other, Node):
            isEqual = self.data == other.data

            if (self.next != None and other.next != None):
                isEqual = self.next.data == other.next.data
            elif (self.next == None and other.next != None) or (self.next != None and other.next == None):
                return False

            if (self.randomPointer != None and other.randomPointer != None):
                isEqual = self.randomPointer.data == other.randomPointer.data
            elif (self.randomPointer == None and other.randomPointer != None) or (self.randomPointer != None and other.randomPointer == None):
                return False

            return isEqual

        return False

    def __ne__(self, other):
        return not(self == other)


class LinkedList:
    def __init__(self):
        self.head = None

    def listprint(self):
        currNode = self.head
        while currNode is not None:
            if (currNode.randomPointer == None):
                print("data:", currNode.data, "Random Pointer NULL")
            else:
                print("data:", currNode.data, "Random Pointer:",
                      currNode.randomPointer.data)
            currNode = currNode.next


nodeList = [Node(i) for i in range(10)]

for i in range(9):
    nodeList[i].next = nodeList[i + 1]
    randIndex = random.randint(0, 19)
    if randIndex < 10:
        nodeList[i].randomPointer = nodeList[randIndex]

list = LinkedList()
list.head = nodeList[0]

list.listprint()
