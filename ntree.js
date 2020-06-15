class Node {
    constructor(data) {
        this.val = data;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(categoria, data) {
        categoria.children.push(new Node(data));
    }

    shallowEqual(object1, object2) {
        return object1.id === object2.id;
    }

    find(id) {
        if (this.root.val.id === id)
            return true;
        let temp = [];
        temp.push(this.root.children);
        for (let i=0; i<temp.length; i++) {
            for (let j=0; j<temp[i].length; j++) {
                if (this.shallowEqual(temp[i][j].val.id, id)) {
                    return true;
                }
                temp.push(temp[i][j].children);
            }
        }
        return false;
    }

    remove(lista, object) {
        for (let i=0; i<lista.length; i++) {
            if (this.shallowEqual(lista[i], object)) {
                lista.splice(i, 1);
            }
        }
    }
}

const arbol = new Tree();
const comida = new Node ({
    name: "comida"
});
arbol.root = comida;
frutas = [{
    name: "pera"
}, {
    name: "manzana"
}, {
    name: "banano"
}];
pasta = [{
    name: "ravioli"
}, {
    name: "tornillo"
}, {
    name: "espagueti"
}]

console.log(arbol);
arbol.insert(comida, frutas);

//arbol.insert(comida, pasta);
//arbol.insert(frutas, {
  //  name: "limon"
//})
console.log(arbol);

