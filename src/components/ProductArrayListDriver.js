import GenericArrayList from "./GenericArrayList";
import make_attribute from "./make_attribute";
// import objectlist from './objectslist';

//Insertar productos

function insert_products(){
    for (let i=0; i<=product_array_list.size; i++){
        //Comment the next lines to prove with the objectlist
        let product = make_attribute();
        product_array_list.insert(product);
        //Comment the next line to prove with make_attribute()
        //product_array_list.insert(objectlist[i]);
    }
}

//Cambie el tamaño del GenericArrayList. Con mas de 10000 Objetos se me cuelga el PC :(

let product_array_list = new GenericArrayList(10000);

//Insertion time
let start = new Date()
let simulateTime = 1000

insert_products();

setTimeout(function(argument) {
    let end = new Date() - start
    console.info('Execution time (Insertion on Array List): %dms', end)
}, simulateTime)


//Search time
let start1 = new Date()
let simulateTime1 = 1000

product_array_list.search('Curry');

setTimeout(function(argument) {
    let end = new Date() - start1
    console.info('Execution time (Search on Array List): %dms', end)
}, simulateTime1)


//Deletion time
let start2 = new Date()
let simulateTime2 = 1000

for (let j=0; j<2500; j++){
    product_array_list.delete('Curry');
}

setTimeout(function(argument) {
    let end = new Date() - start2
    console.info('Execution time (Delete on Array List): %dms', end)
}, simulateTime2)





export default product_array_list;