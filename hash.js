//import GenericNode from "./GenericNode";
//import GenericLinkedList from ..?

class Hash {
    constructor() {
        this.arr = Array(1000).fill(new GenericList());  //no sé qué tamaño poner para el arreglo
    }

    insert(data) {
        this.arr[data.id % this.arr.length].add(data.id);  // el método insert de genericlist
    }

    find(data) {
        return this.arr[data.id % this.arr.length].find(data.id);  // el método find de genericlist
    }

    remove (data) {
        this.arr[data.id % this.arr.length].remove(data.id); //el método remove de genericlist
    }
}