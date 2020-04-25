//Clase GenericArray: Implementada ya que los arreglos de JS son dinámicos por defecto

class GenericArray {
    constructor(size) {
        this.size = size;
        this.data = {};
    }

    push(element) {
        this.data[this.size] = element;
        this.size++;
        return this.data;
    }

    pop() {
        delete this.data[this.size-1];
        this.size--;
        return this.data;
    }

    insertAt(item, index) {
        for(let i=this.size;i>=index;i--) {
            this.data[i]=this.data[i-1];
        }
        this.data[index]=item;
        this.size++;
        return this.data;
    }

    getElementAtIndex(index) {
        return this.data[index];
    }
}

export default GenericArray;