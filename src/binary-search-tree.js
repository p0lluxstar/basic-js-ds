const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.rootValue = null;
  }

  root() {
    return this.rootValue
  }

  add(data) {
    this.rootValue = addItem(this.rootValue, data)

    function addItem(node, value){
      if (!node){
        return new Node(value);
      }

      if (node.data === value){
        return node;
      }

      if (value < node.data){
        node.left = addItem(node.left, value)
      }else{
        node.right = addItem(node.right, value)
      }

      return node;
    }
  }

  has(data) {
    return searchItem(this.rootValue, data)

    function searchItem(node, value){

      if (!node){
        return false;
      }

      if(node.data === value){
        return true;
      }

      return value < node.data ?
        searchItem(node.left, value) :
        searchItem(node.right, value);
    }
  }

  find(data) {
    return searchFind(this.rootValue, data)

    function searchFind(node, value){
      if (!node){
        return null;
      }

      if(node.data === value){
        return node;
      }

      return value < node.data ?
        searchFind(node.left, value) :
        searchFind(node.right, value);
    }
  }

  remove(data) {
    this.rootValue = removeNode(this.rootValue, data);

    function removeNode(node, value){
      if (!node){
        return null;
      }

      if (value < node.data){
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value){
        node.right = removeNode(node.right, value);
        return node;
      } else {

        if(!node.left && !node.right){
          return null;
        }

        if(!node.left){
          node = node.right
          return node
        }

        if(!node.right){
          node = node.left
          return node
        }

        let minFromRight = node.right;
        while (minFromRight.left){
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootValue){
      return;
    }

    let node = this.rootValue;
    while (node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootValue){
      return;
    }

    let node = this.rootValue;
    while (node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};