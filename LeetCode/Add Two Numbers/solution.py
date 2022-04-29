from typing import Optional
import math

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
        

def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    if l1 is None and l2 is None:
        return None
    
    return addTwoNodes(l1, l2)
    

def addTwoNodes(node1, node2, carry=0): 
    if node1 is None and node2 is None:
        if carry is 0:
            return None
        else:
            return ListNode(1, None)
    
    if node1 is None:
        next_carry = math.floor((node2.val + carry) / 10)
        mod = (node2.val + carry) % 10  
        next = addTwoNodes(None, node2.next, next_carry)
        return ListNode(mod, next)

    if node2 is None:
        next_carry = math.floor((node1.val + carry) / 10)
        mod = (node1.val + carry) % 10
        next = addTwoNodes(node1.next, None, next_carry)
        return ListNode(mod, next)
    
    next_carry = math.floor((node1.val + node2.val + carry) / 10)
    mod = (node1.val + node2.val + carry) % 10
    next = addTwoNodes(node1.next, node2.next, next_carry)
    return ListNode(mod, next)