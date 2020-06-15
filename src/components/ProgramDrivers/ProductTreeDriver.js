import Tree from "../DataStructures/Tree";
import Node from "../DataStructures/Node";
import make_attribute from "./make_attribute";

//Insertar productos

function insert_products(){
    for (let i=0; i<=1000; i++){

        let product = make_attribute();
        if (product.productName === "Sushi" ||
            product.productName === "Pez globo"
        ){
            product_tree.insert(fish,product);
        } else if (
            product.productName === "Dorayaki" ||
            product.productName === "Nieve mango" ||
            product.productName === "Takoyakis" ||
            product.productName === "Tofu frito"
        ){
            product_tree.insert(desserts,product);
        } else if (
            product.productName === "Cerdo dulce" ||
            product.productName === "Satay" ||
            product.productName === "Ddeokbokki" ||
            product.productName === "Yakitori" ||
            product.productName === "Peking duck" ||
            product.productName === "Teokbokki" ||
            product.productName === "Japchae" ||
            product.productName === "Okonomiyaki"
        ){
            product_tree.insert(courses, product);
        } else if (
            product.productName === "Curry" ||
            product.productName === "Yakisoba" ||
            product.productName === "Ramen" ||
            product.productName === "Soba fideos" ||
            product.productName === "Laksa"
        ){
            product_tree.insert(soups, product);
        }else if (
            product.productName === "Genmaicha"
        ){
            product_tree.insert(drinks, product);
        }
    }
}


let product_tree = new Tree();

let root = new Node({
    name: "Categories"
});

product_tree.root = root;

let desserts = [];
product_tree.insert(root,desserts);

let fish = [];
product_tree.insert(root,fish);

let courses = [];
product_tree.insert(root,courses);

let soups = [];
product_tree.insert(root,soups);

let drinks = [];
product_tree.insert(root,drinks);



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


product_tree.find('Curry');

setTimeout(function(argument) {
    let end = new Date() - start1
    console.info('Execution time (Search on Tree): %dms', end)
}, simulateTime1)


//Deletion time
let start2 = new Date()
let simulateTime2 = 1000

for (let j=0; j<2500; j++){
    product_tree.remove(courses, product_tree.find("Curry"));
}

setTimeout(function(argument) {
    let end = new Date() - start2
    console.info('Execution time (Delete on Tree): %dms', end)
}, simulateTime2)


export default product_tree;