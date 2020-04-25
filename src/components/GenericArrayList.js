import GenericArray from "./GenericArray";

// Clase GenericArrayList: Implementación de listas con arreglos. No es necesario
// implementar Interfaces o Generic Classes como en Java. (Duck Typing)

class GenericArrayList{

    constructor(size){
        this.size = size;
        this.count = 0;
        this.position = 0;
        this.array = new GenericArray(this.size);
    }

    empty() {
        return this.count<=0;
    }

    full() {
        return this.count >= this.size;
    }

    insert(item) {
        let inserted = true;
        if(!this.full()) {
            if (!this.search(item)) {
                for (let j = this.count; j > this.position; j--) {
                    this.array.insertAt(this.array.getElementAtIndex(j-1),j);
                }
                this.array.insertAt(item, this.position);
                this.count++;
                return inserted;
            } else {
                console.log("List is Full");
                return !inserted;
            }
        }
    }

    delete(item) {
        let deleted = true;
        if(!this.empty()) {
            if (this.search(item)) {
                for (let j = this.position; j < this.count - 1; j++) {
                    this.array.insertAt(this.array.getElementAtIndex(j + 1), j);
                }
                this.count--;
                return deleted;
            } else {
                console.log("List is Empty");
                return !deleted;
            }
        }
    }

    search(item) {
        let found = false;
        let stop = false;
        this.position = 0;
        while(this.position < this.count && !stop)
            if(((this.array.getElementAtIndex(this.position).productName).localeCompare(item.productName)) <= 0) {
                stop = true;
                if((this.array.getElementAtIndex(this.position).productName) === item.productName){
                    found = true;
                }
            }else{
                this.position++;
                return found;
            }
    }

    //Solo está imprimiendo el precio de los productos, por conveniencia para probar
    output() {
        console.log('List: ');
        let j = 0;
        while(j !== this.count) {
            console.log(this.array.getElementAtIndex(j).productPrice);
            j++;
        }
    }

}

export default GenericArrayList;