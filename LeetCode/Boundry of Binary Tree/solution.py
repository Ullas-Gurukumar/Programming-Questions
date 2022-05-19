# https://leetcode.com/problems/boundary-of-binary-tree/
from gettext import gettext
from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left: TreeNode = left
        self.right: TreeNode = right

def boundaryOfBinaryTree(root: Optional[TreeNode]) -> List[int]:
    boundary = []
    boundary.append(root.val)
    boundary.extend(get_left_boundary(root))
    boundary.extend(get_leaves(root))
    boundary.extend(get_right_boundary(root))
    return boundary

def get_left_boundary(node: TreeNode) -> List[int]:
    result = []

    if node.left != None:
        if node.left.left != None or node.left.right != None:
            result.append(node.left.val)
        result.extend(get_left_boundary(node.left))
    elif node.right != None:
        if node.right.left != None or node.right.right != None:
            result.append(node.right.val)
        result.extend(get_left_boundary(node.right))

    return result

def get_leaves(node: TreeNode) -> List[int]:
    result = []
    left_node = node.left
    right_node = node.right
    if left_node == None and right_node == None:
        return [node.val]
    
    if left_node != None:
        result.extend(get_leaves(left_node))
    
    if right_node != None:
        result.extend(get_leaves(right_node))

    return result

def get_right_boundary(node: TreeNode, depth=0) -> List[int]:
    result = []
    if node.right != None:
        if node.right.left != None or node.right.right != None:
            result.append(node.right.val)
        result.extend(get_right_boundary(node.right, depth+1))
    elif node.left != None:
        if node.left.left != None or node.left.right != None:
            result.append(node.left.val)
        result.extend(get_right_boundary(node.left, depth+1))
    
    if depth == 0:
        result.reverse()
    
    return result