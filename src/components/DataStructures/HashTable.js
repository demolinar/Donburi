import users1 from "../../data/users";
class HashTable {

    constructor(size) {
        this.size = size;
        this.array = Array(size);
    }

    hashFunction(key){
        let hashConst = 17;
        for (let i=0; i<key.length; i++){
            hashConst = (11 * hashConst * key.charCodeAt(i)) % this.size;
        }
        return hashConst;
    }

    insert(key, value){
            let index = this.hashFunction(key);
            if (this.array[index]) {
                this.array[index].push([key, value]);
            } else {
                this.array[index] = [[key, value]];
            }
    }

    search(key){
        let index = this.hashFunction(key);
        if(!this.array[index].find(x => x[0] === key)){
            return null;
        }
        return this.array[index].find(x => x[0] === key)[1];
    }
}

let hash = new HashTable(23);
for( let j=0; j<users1.length; j++){
    hash.insert(users1[j].firstName, users1[j]);
}

export default HashTable;