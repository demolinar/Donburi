//Clase Product: Clase con atributos de los productos de Donburi
class Product{
    constructor(name, code, price) {
        this.productName  = name;
        this.productCode  = code;
        this.productPrice = price;
        this.inCar = false;
    }
}

export default Product;