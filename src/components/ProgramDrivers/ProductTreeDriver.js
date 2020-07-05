import BST from "../DataStructures/BST";
import make_attribute from "./make_attribute";
//import {array} from "prop-types";

//Insertar productos

function insert_products(){
    for (let i=0; i<=10; i++){
        let prod = make_attribute();
        product_tree.insert(i, prod);
    }
}

let product_tree = new BST();

//Insertion time
let start = new Date()
let simulateTime = 1000

insert_products();

setTimeout(function(argument) {
    let end = new Date() - start
    console.info('Execution time (Insertion on Tree): %dms', end)
}, simulateTime)


//Search time
let start1 = new Date()
let simulateTime1 = 1000

product_tree.search(product_tree.root, "Curry");

setTimeout(function(argument) {
    let end = new Date() - start1
    console.info('Execution time (Search on Tree): %dms', end)
}, simulateTime1)


//Deletion time
let start2 = new Date()
let simulateTime2 = 1000

for (let j=0; j<2500; j++){
    product_tree.delete(3);
}

setTimeout(function(argument) {
    let end = new Date() - start2
    console.info('Execution time (Delete on Tree): %dms', end)
}, simulateTime2)


export default product_tree;