// Clase GenericArrayList: Implementación de listas con arreglos. No es necesario
// implementar Interfaces o Generic Classes como en Java. (Duck Typing)

class GenericArrayList{

    constructor(size){
        this.size = size;
        this.count = 0;
        this.position = 0;
        this.array = new Array(this.size);
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
                    this.array[j] = this.array[j-1];
                }
                this.array[this.position] = item;
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
                    this.array[j] = this.array[j+1];
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
            if(((this.array[this.position].productName).localeCompare(item)) <= 0) {
                stop = true;
                if((this.array[this.position].productName) === item){
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
            console.log("Product " + j + " : ")
            console.log(this.array[j].productName + ", " + this.array[j].productPrice +
                ", " + this.array[j].productCode);
            j++;
        }
        console.log("Array of:" + this.array.length);
    }

}

export default GenericArrayList;