
class Node{

    constructor(key, data) {
        this.key = key;
        this.data = data;
        this.left = this.right = null;
    }

}

class BST {

    constructor() {
        this.root = null;
        this.array = [];
        this.index = 0;
    }

    minValue(node) {
        let current = node;
        while (current && current.left != null){
            current = current.left;
        }
        return current;
    }

    maxValue(node) {
        let current = node;
        while (current && current.right != null){
            current = current.right;
        }
        return current;
    }

    delete(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {

        if(node === null)
            return null;
        else if(key<node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if(key>node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }

            let aux = this.minValue(node.right);
            node.data = aux.data;
            node.key = aux.key;

            node.right = this.removeNode(node.right, aux.key);
            return node;
        }

    }

    insert(key, data) {
        let newNode = new Node(key, data);

        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if(newNode.key<node.key) {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right,newNode);
        }
    }

    inorder(root) {
        if (!root) {
            return;
        }
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }

    search(node, data) {
        if(node === null)
            return null;
        else if(data < node.data)
            return this.search(node.left, data);
        else if(data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }

    toArray(node) {
        if (node == null)
            return;
        this.toArray(node.left);
        this.array[this.index++] = node.data;
        this.toArray(node.right);
        return this.array;
    }

}

export default BST;