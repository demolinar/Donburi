import Product from "./Product";
import GenericLinkedList from "./GenericLinkedList";
import make_attribute from "./make_attribute";

let product_linked_list = new GenericLinkedList();

function insert_products_linked_list(){
    for (let i=0; i<=product_linked_list.size; i++){
        let name = make_attribute(8,'name');
        let code = make_attribute(4,'code');
        let price = Math.floor(Math.random()*(30000-1000)+999);
        let imageSource = '//:0';
        let product = new Product(name, code, price, imageSource);
        product_linked_list.insertAt(product, i);
    }
}

insert_products_linked_list();

export default product_linked_list;