"use strict"
const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'C',
      left: {
        value: 'E',
      }
    },
    right: {
      value: "D",
    },
  },
  right: {
    value: 'F',
  },
};

function breadth_traverse(tree, fn) {
  const queue = [];
  queue.push(tree);
  while(queue.length) {
    const node = queue.shift();
    fn(node.value);
    if (node.left){
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

console.log('breadth_traverse(tree, console.log) = ', breadth_traverse(tree, console.log));

function deep_traverse(tree, fn, type) {
  if (!tree) {
    return;
  }
  if (type === 0) {
    fn(tree.value);
  }
  deep_traverse(tree.left, fn, type);
  if (type === 1) {
    fn(tree.value);
  }
  deep_traverse(tree.right, fn, type);
  if (type === 2) {
    fn(tree.value);
  }
}

console.log('deep_traverse(tree, console.log, 0) = ', deep_traverse(tree, console.log, 0));
console.log('deep_traverse(tree, console.log, 1) = ', deep_traverse(tree, console.log, 1));
console.log('deep_traverse(tree, console.log, 2) = ', deep_traverse(tree, console.log, 2));