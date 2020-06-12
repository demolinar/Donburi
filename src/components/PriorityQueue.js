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

let pQueue = new PriorityQueue();
pQueue.make_heap([['a',5], ['f', 4], ['m', 6], ['p', 9], ['q', 7], ['o', 8], ['x', 2], ['c', 1], ['v', 3], ['l', 10]]);
pQueue.print();

export default PriorityQueue;
