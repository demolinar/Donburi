import make_attribute from "../ProgramDrivers/make_attribute";

class Queue {
    constructor(capacity) {
        this.capacity = capacity;
        this.front = 0;
        this.size = 0;
        this.rear = capacity - 1;
        this.heap = new Array(this.capacity);
    }

    isFull() {
        return (this.size === this.capacity);
    }

    isEmpty() {
        return (this.size === 0);
    }

    enqueue(object) {
        if (this.isFull()){
            return;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.heap[this.rear] = object;
        this.size = this.size + 1;
        console.log("enqueued to queue");
    }

    dequeue() {
        if (this.isEmpty())
            return 0;

        let object = this.heap[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size = this.size - 1;
        return object;
    }

    front() {
        if (this.isEmpty()) {
            return 0;
        }
        return this.heap[this.front];
    }

    rear() {
        if (this.isEmpty()) {
            return 0;
        }
        return this.heap[this.rear];
    }
}

let queue = new Queue(100000);

function insert_products(){
    for (let i=0; i<=queue.capacity; i++){
        //Comment the next lines to prove with the objectlist
        let product = make_attribute();
        queue.enqueue(product);
        //Comment the next line to prove with make_attribute()
    }
}

//Insertion time
let start = new Date()
let simulateTime = 1000

insert_products();

setTimeout(function(argument) {
    let end = new Date() - start
    console.info('Execution time (Insertion on Queue): %dms', end)
}, simulateTime)


//Deletion time
let start2 = new Date()
let simulateTime2 = 1000

for (let j=0; j<queue.capacity; j++){
    queue.dequeue();
}

setTimeout(function(argument) {
    let end = new Date() - start2
    console.info('Execution time (Delete on Queue): %dms', end)
}, simulateTime2)

export default Queue;
