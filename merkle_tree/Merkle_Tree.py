import hashlib
import binascii
import random
import time
import copy


class MT:

    def __init__(self):
        self.root = None
        self.number_of_nodes = 0
        self.leaves_array = []

    def merkle_tree(self, input_list, hash_algo='sha256'):
        for element in input_list:
            self.add_data_block(element, hash_algo)
        self.root = self.create_tree(hash_algo=hash_algo)

    def add_data_block(self, block_data, hash_algo='sha256'):
        new_node = self.new_node()
        MT.hash(new_node, block_data, hash_algo)
        self.leaves_array.append(new_node)

    def create_tree(self, node_list=None, hash_algo='sha256'):
        if node_list is None:
            node_list = self.leaves_array
        new_node_list = []
        enum = enumerate(node_list)
        for i, node in enum:
            new_node = self.new_node()
            new_node.hash_val = node.hash_val
            new_node.left_child = node
            node.parent = new_node
            if i + 1 < len(node_list):
                i, node = next(enum)
                new_node.hash_val += node.hash_val
                new_node.right_child = node
                node.parent = new_node
            else:
                new_node.hash_val += new_node.hash_val

            MT.hash(new_node, new_node.hash_val, hash_algo)
            new_node_list.append(new_node)
        if len(new_node_list) == 1:
            return new_node_list[0]
        else:
            return self.create_tree(new_node_list, hash_algo)

    def new_node(self):
        new_node = Node()
        self.number_of_nodes += 1
        new_node.number = self.number_of_nodes
        return new_node

    @staticmethod
    def hash(node, data, hash_algo):
        h = hashlib.new(hash_algo)
        h.update(data)
        node.hash_val = binascii.b2a_hex(h.digest())

    @staticmethod
    def find_improper_blocks(first_node, second_node, list):
        if first_node.hash_val != second_node.hash_val:
            if first_node.is_leaf() and second_node.is_leaf():
                list.append(second_node)
            else:
                MT.find_improper_blocks(first_node.left_child, second_node.left_child, list)
                MT.find_improper_blocks(first_node.right_child, second_node.right_child, list)


class Hashlist:

    def __init__(self):
        self.mt = MT()

    def get_hashlist(self, input_list, hash_algo='sha256'):
        self.mt.add_data_block(input_list, hash_algo)
        return self.mt.leaves_array


class Node:

    def __init__(self):
        self.left_child = None
        self.right_child = None
        self.hash_val = None
        self.parent = None
        self.number = -1

    def is_leaf(self):
        if self.left_child is None and self.right_child is None:
            return True
        else:
            return False


def run_merkle_test(list, hash_algo='blake2b'):
    merkle_tree = MT()
    start = time.time()
    merkle_tree.merkle_tree(list, 'blake2b')
    end = time.time()
    print(end - start, merkle_tree.root.hash_val.decode('utf-8'))
    print(len(merkle_tree.root.hash_val.decode('utf-8')), merkle_tree.number_of_nodes)
    return merkle_tree


def list_of_file_lines(file):
    input_list = []
    f = open(file, 'rb')
    for line in f:
        input_list.append(line)
    return input_list

file1 = list_of_file_lines("test.txt")
file2 = copy.deepcopy(file1)
changing_lines = []
for x in range(5):  # changing some lines in second list
    rand1 = random.randint(0, len(file1))
    rand2 = random.randint(0, len(file1))
    file2[rand2] += file1[rand1]
    changing_lines.append(rand2+1)  # keeping track of which lines to check it later

tree1 = run_merkle_test(file1)
tree2 = run_merkle_test(file2)
improper_nodes = []
MT.find_improper_blocks(tree1.root, tree2.root, improper_nodes)

if len(changing_lines) != len(improper_nodes):
    print('something wrong')
for node in improper_nodes:
    if node.number not in changing_lines:
        print(node.number, ' was not expected')
print('done')

