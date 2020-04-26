import GenericArrayList from "./GenericArrayList";
import Product from "./Product";
import make_attribute from "./make_attribute";

//Insertar productos
function insert_products(){
    for (let i=0; i<=product_array_list.size; i++){
        let name = make_attribute(8,'name');
        let code = make_attribute(4,'code');
        let price = Math.floor(Math.random()*(30000-1000)+999);
        let imageSource = '//:0';
        let product = new Product(name, code, price, imageSource);
        product_array_list.insert(product);
    }
}

//Cambie el tamaño del GenericArrayList. Con mas de 300 Objetos se me cuelga el PC :(
let product_array_list = new GenericArrayList(100);

insert_products();

//Imprime el tiempo de ejecución

/*
let start = new Date()
let hrstart = process.hrtime()
let simulateTime = 5

setTimeout(function(argument) {
    let end = new Date() - start,
        hrend = process.hrtime(hrstart)
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}, simulateTime)
*/

export default product_array_list;