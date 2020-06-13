/* Context.js: Maneja la actualización de los Detalles de los producto, así como la actualización de los precios y totales del carrito de compras.
       ProductProvider: Contiene el estado (state) de los datos del programa, asi como las funciones de actualización.
           getItem: Busca un producto en específico en la lista state.products, la cual permite que no se modifiquen los datos en el ArrayList original de productos.
           addToCar: Añade un producto al carrito de compras.
           openProductPreview: Cambia el valor de verdad de productPreviewOpen, la cual activa la vista de detalles del producto recién añadido al carrito.
           closeProductPreview: Cambia el valor de verdad de productPreviewOpen, la cual desactiva la vista de detalles del producto recién añadido al carrito.
           addQuantity: Aumenta la cantidad de un mismo producto dentro del carrito de compras.
           decreaseQuantity: Disminuye la cantidad de un mismo producto dentro del carrito de compras.
           removeItem: Remueve un producto en específico del carrito.
           clearCart: Limpia por completo el carrito.
           calculateTotal: calcula el subtotal, los impuestos y el total de los productos añadidos al carrito.
*/

import React, {Component} from "react";
import product_array_list from "./components/ProductArrayListDriver";
import product_linked_list from "./components/ProductLinkedListDriver";
import PriorityQueue from "./components/PriorityQueue";

const productDetails = {
    productName: "Sushi",
    productCode: "Ab0303",
    productPrice: 21000,
    img: "://0",
    inCart: false,
    details: "Utamur hendrerit cu est. Nihil torquatos qui ut. Mollis malorum perfecto vix ne. " +
        "Quo id tritani discere dolores, noster eirmod ancillae an sea, ut cum debet delenit accusamus. " +
        "Duo ex oporteat imperdiet urbanitas."
}

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        products: [],
        productsLinked: product_linked_list,
        productDetails: productDetails,
        shoppingCart: new PriorityQueue(),
        productPreviewOpen: false,
        productPreviewModel: productDetails,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    };

    setProducts = () => {
        let products = [];
        product_array_list.array.forEach(item => {
            const singleItem = {...item};
            products = [...products, singleItem];
        })

        this.setState(()=>{
            return {products:products};
        });
    };

    getItem = productName => {
        const product = this.state.products.find(item => item.productName === productName);
        return product;
    };

    handleDetail = productName => {
        const product = this.getItem(productName);
        this.setState(() => {
            return {productDetails:product};
        });
    };

    addToCart = productName => {
        let auxProducts = [...this.state.products];
        const index = auxProducts.indexOf(this.getItem(productName));
        const product = auxProducts[index];

        product.inCart = true;
        product.count = 1;
        const price = product.productPrice;
        product.total = price;

        this.state.shoppingCart.insert(product);

        this.setState(() => {
            return {products: auxProducts, shoppingCar: this.state.shoppingCart.heap};
        },() => {
            this.calculateTotal();
        });
    };

    openProductPreview = productName => {
        const product = this.getItem(productName);
        this.setState(() => {
            return {productPreviewModel: product, productPreviewOpen: true};
        });
    };

    closeProductPreview = () => {
        this.setState(() => {
            return {productPreviewOpen: false};
        });
    };

    addQuantity = productName => {
        let tempCart = this.state.shoppingCart;
        const selectedProduct = tempCart.heap.find(item => item[0].productName === productName);
        const index = tempCart.heap.indexOf(selectedProduct);
        const product = tempCart.heap[index];

        product[0].count++;
        product[0].total = product[0].count * product[0].productPrice;

        this.setState(() => {
            return{shoppingCart: tempCart};
        }, () => {
            this.calculateTotal();
        });
    };

    decreaseQuantity = productName => {
        let tempCart = this.state.shoppingCart;
        const selectedProduct = tempCart.heap.find(item => item[0].productName === productName);
        const index = tempCart.heap.indexOf(selectedProduct);
        const product = tempCart.heap[index];

        if (product[0].count === 0){
            product[0].count = 0;
        } else {
            product[0].count = product[0].count - 1;
            product[0].total = product[0].count * product[0].productPrice;
            this.setState(() => {
                return{shoppingCart: tempCart};
            }, () => {
                this.calculateTotal();
            });
        }
    };

    removeItem = productName => {

    };

    clearCart = () => {
        this.setState(
            () => {
                return {shoppingCart: new PriorityQueue()};
            },
            () => {
                this.setProducts();
                this.calculateTotal();
            }
        );
    };

    calculateTotal = () => {
        let subTotal = 0;
        this.state.shoppingCart.heap.map(item => (subTotal += item[0].total));
        const tempTax = subTotal * 0.19;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return{cartSubTotal: subTotal, cartTax: tax, cartTotal: total};
        });
    };

    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                handleDetail: this.handleDetail,
                openProductPreview: this.openProductPreview,
                closeProductPreview: this.closeProductPreview,
                addQuantity: this.addQuantity,
                decreaseQuantity: this.decreaseQuantity,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};