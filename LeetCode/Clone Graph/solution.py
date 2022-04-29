from typing import List

"""
# Definition for a Node.
"""
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


def cloneGraph(node: Node) -> Node:
    if node is None:
        return []
    
    if node.neighbors is None or len(node.neighbors) == 0:
        return [[]]
    
    nodes = {}
    read_nodes = [node]

    while(len(read_nodes) != 0):
        curr_node = read_nodes.pop(0)
        if curr_node.neighbors is not None:
            for neighbor in curr_node.neighbors:
                if neighbor.val not in nodes.keys():
                    read_nodes.append(neighbor)
                
        adj_list = list(map(lambda neighbor: neighbor.val, curr_node.neighbors))
        nodes[curr_node.val] = Node(curr_node.val, adj_list)
    
    for key in nodes.keys():
        nodes[key].neighbors = list(map(lambda n: nodes[n],nodes[key].neighbors))
            
    return nodes[1]

def createGraph(adjacency_list: List[List[int]]) -> List[Node]:
    nodes: List[Node] = []
    for index, adjacent_nodes in enumerate(adjacency_list):
        nodes.append(Node(index+1, adjacent_nodes))
    
    for node in nodes:
        node.neighbors = list(map(lambda val: nodes[val - 1], node.neighbors))
        
    return nodes
    
# [[2,4],[1,3],[2,4],[1,3]]
graph1 = createGraph([[2,4],[1,3],[2,4],[1,3]])
print(cloneGraph(graph1[0]))

graph1 = createGraph([])
print(cloneGraph(graph1[0]))