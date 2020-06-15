import Node from "./Node";

class Tree {
    constructor() {
        this.root = new Node();
    }

    insert(category, data) {
        category.children.push(new Node(data));
    }

    shallowEqual(object1, object2) {
        return {object1} === {object2};
    }

    find(id) {
        if (this.root.val.productName === id)
            return true;
        let temp = [];
        temp.push(this.root.children);
        for (let i=0; i<temp.length; i++) {
            for (let j=0; j<temp[i].length; j++) {
                if (this.shallowEqual(temp[i][j].val.productName, id)) {
                    return true;
                }
                temp.push(temp[i][j].children);
            }
        }
        return false;
    }

    remove(list, object) {
        for (let i=0; i<list.length; i++) {
            if (this.shallowEqual(list[i], object)) {
                list.splice(i, 1);
            }
        }
    }
}

export default Tree;