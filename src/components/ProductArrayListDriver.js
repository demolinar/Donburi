import GenericArrayList from "./GenericArrayList";
import Product from "./Product";

//Funciones que insertan productos aleatorios a un GenericArrayList

function make_attribute(length, attribute) {
    let result           = '';
    let numbers          = '123456789';
    let code             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    let numbersLength    = numbers.length;
    let codeLength       = code.length;
    for (let i = 0; i < length; i++ ) {
        if(attribute==='name'){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        } else if (attribute==='code'){
            result += code.charAt(Math.floor(Math.random() * codeLength));
        } else if (attribute==='price'){
            result += numbers.charAt(Math.floor(Math.random() * numbersLength));
        }
    }
    return result;
}

//Insertar productos
function insert_products(){
    for (let i=0; i<=product_array_list.size; i++){
        let name = make_attribute(8,'name');
        let code = make_attribute(4,'code');
        let priceLength = Math.floor(Math.random()*(5-2)+1);
        let price = make_attribute(priceLength,'price');
        let product = new Product(name, code, price);
        product_array_list.insert(product);
    }
}

//Cambie el tamaño del GenericArrayList. Con mas de 300 Objetos se me cuelga el PC :(
let product_array_list = new GenericArrayList(500);

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