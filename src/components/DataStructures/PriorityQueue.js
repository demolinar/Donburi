//import make_attribute from "./make_attribute";
//import product_array_list from "./ProductArrayListDriver";


class PriorityQueue {
    constructor() {
        this.heap = [];
        this.length = this.size();
    }
    size() {
        return this.heap.length;
    }
    make_heap(array) {
        for (let i=0; i<array.length; i++) {
            this.insert(array[i]);
        }
    }
    move_up() {
        let child = this.heap[this.size()-1];
        let temp = this.size()-1;
        while (temp !== 0 && this.heap[this.parent(temp)][1] > child[1]) {
            this.heap[temp] = this.heap[this.parent(temp)];
            temp = this.parent(temp);
        }
        if (this.heap[temp][1] > child[1]){
            this.heap[temp] = child;
        }
    }
    insert(data, priority=this.size()+1) {
        this.heap.push([data, priority]);
        this.move_up();
    }
    parent(pos) {
        if (pos % 2 === 1) {
            return (pos-1)/2
        }
        return (pos-2)/2
    }

    search(object){
        let results = this.heap.filter(item => item[0].productName === object);
        return results;
    }
    print() {
        for (let i=0; i<this.size(); i++) {
            console.log(this.heap[i][0] + " " + this.heap[i][1]);
        }
    }
    shallowEqual(object1, object2) {
        const keys1 = Object.keys(object1)
        const keys2 = Object.keys(object2);
        for (let index = 0; index < keys1.length; index++) {
            if (object1[keys1[index]] !== object2[keys2[index]]) {
                return false;
            }
        }
        return true;
    }
    remove(object) {
        for (let i=0; i<this.size(); i++) {
            if (this.shallowEqual(object, this.heap[i][0])) {
                this.heap[i] = this.heap[this.size()-1];
                this.heap.pop();
                console.log(this.heap);
                this.heap.forEach( () => this.move_up() );
                console.log(this.heap);
                return;
            }
        }
    }
}

// let pQueue = new PriorityQueue();
//
// function insert_products(){
//     for (let i=0; i<=1000; i++){
//         //Comment the next lines to prove with the objectlist
//         let product = make_attribute();
//         pQueue.insert(product);
//         //Comment the next line to prove with make_attribute()
//     }
// }
//
// //Insertion time
// let start = new Date()
// let simulateTime = 1000
//
// insert_products();
//
// setTimeout(function(argument) {
//     let end = new Date() - start
//     console.info('Execution time (Insertion on PriorityQueue): %dms', end)
// }, simulateTime)
//
// //Search time
// let start1 = new Date()
// let simulateTime1 = 1000
//
//
// pQueue.search('Curry');
//
// setTimeout(function(argument) {
//     let end = new Date() - start1
//     console.info('Execution time (Search on PriorityQueue): %dms', end)
// }, simulateTime1)
//
//
//
// //Deletion time
// let start2 = new Date()
// let simulateTime2 = 1000
//
// for (let j=0; j<2500; j++){
//     pQueue.remove(product_array_list.array[0]);
// }
//
// setTimeout(function(argument) {
//     let end = new Date() - start2
//     console.info('Execution time (Delete on PriorityQueue): %dms', end)
// }, simulateTime2)

export default PriorityQueue;
