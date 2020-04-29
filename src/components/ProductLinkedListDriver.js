import GenericLinkedList from "./GenericLinkedList";
import make_attribute from "./make_attribute";
// import objectlist from './objectslist'

function insert_products_linked_list(){
    for (let i=0; i<10000; i++){
        //Comment the next lines to prove with the objectlist
        let prod = make_attribute();
        product_linked_list.add(prod);
        //Comment the next line to prove with make_attribute()
        //product_linked_list.add(objectlist[i]);
    }
}

let product_linked_list = new GenericLinkedList();

//Insertion time
let start = new Date()
let simulateTime = 1000

insert_products_linked_list();

setTimeout(function(argument) {
    let end = new Date() - start
    console.info('Execution time (Insertion on Linked List): %dms', end)
}, simulateTime)


product_linked_list.pushToArray();

//Search time
let start1 = new Date()
let simulateTime1 = 1000

product_linked_list.lookFor('Curry');

setTimeout(function(argument) {
    let end = new Date() - start1
    console.info('Execution time (Search on Linked List): %dms', end)
}, simulateTime1)


//Deletion time
let start2 = new Date()
let simulateTime2 = 1000

for(let j=0; j<2500; j++){
    product_linked_list.removeElement('Yakisoba');
}

setTimeout(function(argument) {
    let end = new Date() - start2
    console.info('Execution time (Delete on Linked List): %dms', end)
}, simulateTime2)


export default product_linked_list;
