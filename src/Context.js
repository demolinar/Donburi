/* Context.js: Maneja la actualización de los Detalles de los producto, así como la actualización de los precios y totales del carrito de compras.
*/

import React, {Component} from "react";
import product_array_list from "./components/ProgramDrivers/ProductArrayListDriver";
import product_linked_list from "./components/ProgramDrivers/ProductLinkedListDriver";
import PriorityQueue from "./components/DataStructures/PriorityQueue";
import Queue from "./components/DataStructures/Queue";
import product_tree from "./components/ProgramDrivers/ProductTreeDriver";


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

//ProductProvider: Contiene el estado (state) de los datos del programa, asi como las funciones de actualización.
class ProductProvider extends Component{
    state = {
        products: [],
        searchResults: [],
        productsLinked: product_linked_list,
        productsTree: product_tree,
        productDetails: productDetails,
        shoppingCartQueue: new Queue(),
        shoppingCart: new PriorityQueue(),
        productPreviewOpen: false,
        productPreviewModel: productDetails,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        searchString:''
    };

    componentDidMount() {
        this.setProducts();
    };
    //getItem: Realiza una copia del ArrayList en state.products, la cual permite que no se modifiquen los datos en el ArrayList original de productos.
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

    //getItem: Busca un producto en específico en la lista state.products, la cual permite que no se modifiquen los datos en el ArrayList original de productos.
    getItem = productName => {
        const product = this.state.products.find(item => item.productName === productName);
        return product;
    };

    getSearch = () => {
        const search = this.state.searchString;
        return search;
    }

    //handleDetail: Gestiona los detalles de un producto dado.
    handleDetail = productName => {
        const product = this.getItem(productName);
        this.setState(() => {
            return {productDetails:product};
        });
    };

    //addToCar: Añade un producto al carrito de compras.
    addToCart = productName => {
        let auxProducts = [...this.state.products];
        const index = auxProducts.indexOf(this.getItem(productName));
        const product = auxProducts[index];

        product.inCart = true;
        product.count = 1;
        const price = product.productPrice;
        product.total = price;

        this.state.shoppingCart.insert(product);
        /*this.state.shoppingCartQueue.enqueue(product);*/

        this.setState(() => {
            return {products: auxProducts, shoppingCar: this.state.shoppingCart/* shopṕíngCartQueue: this.state.shoppingCartQueue*/};
        },() => {
            this.calculateTotal();
        });
    };

    setSearch = e => {
        let search = e.currentTarget.value;
        console.log(e.currentTarget.value);
        this.setState(() => {
            return {searchString: search};
        });
    }

    clearSearch = () =>{
        this.setState(() => {
            return {searchString: ''};
        });
    }

    //search: Filtra la lista de productos y devuelve el resultado
    search = () => {
        console.log(this.state.searchString);
        console.log(this.getSearch);
        if(this.state.searchString === ''){
            this.setState(() => {
                return {searchResults: []};
            });
        }
        let aux = [...this.state.products];
        let results = aux.filter(product => {
            return product.productName.toLowerCase().indexOf(this.getSearch()) !== -1;
        })
        this.setState(() => {
            return {searchResults: results};
        });
    }

    //openProductPreview: Cambia el valor de verdad de productPreviewOpen, la cual activa la vista de detalles del producto recién añadido al carrito.
    openProductPreview = productName => {
        const product = this.getItem(productName);
        this.setState(() => {
            return {productPreviewModel: product, productPreviewOpen: true};
        });
    };

    //closeProductPreview: Cambia el valor de verdad de productPreviewOpen, la cual desactiva la vista de detalles del producto recién añadido al carrito.
    closeProductPreview = () => {
        this.setState(() => {
            return {productPreviewOpen: false};
        });
    };

    //addQuantity: Aumenta la cantidad de un mismo producto dentro del carrito de compras.
    addQuantity = productName => {
        let tempCart = this.state.shoppingCart;
        // let tempCart1 = this.state.shoppingCartQueue;

        const selectedProduct = tempCart.heap.find(item => item[0].productName === productName);
        // const selectedProduct1 = tempCart1.heap.find(item => item.productName === productName);

        const index = tempCart.heap.indexOf(selectedProduct);
        const product = tempCart.heap[index];
        // const index1 = tempCart1.heap.indexOf(selectedProduct1)
        // const product1 = tempCart1.heap[index1];

        product[0].count++;
        product[0].total = product[0].count * product[0].productPrice;
        // product1.count++;
        // product1.total = product1.count * product1.productPrice;

        this.setState(() => {
            return{shoppingCart: tempCart, /*shoppingCartQueue: tempCart1*/};
        }, () => {
            this.calculateTotal();
        });
    };

    //decreaseQuantity: Disminuye la cantidad de un mismo producto dentro del carrito de compras.
    decreaseQuantity = productName => {
        let tempCart = this.state.shoppingCart;
        // let tempCart1 = this.state.shoppingCartQueue;

        const selectedProduct = tempCart.heap.find(item => item[0].productName === productName);
        // const selectedProduct1 = tempCart1.heap.find(item => item.productName === productName);

        const index = tempCart.heap.indexOf(selectedProduct);
        const product = tempCart.heap[index];
        // const index1 = tempCart1.heap.indexOf(selectedProduct1)
        // const product1 = tempCart1.heap[index1];

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

        // if (product1.count === 0){
        //     product1.count = 0;
        // } else {
        //     product1.count = product1.count - 1;
        //     product1.total = product1.count * product1.productPrice;
        //     this.setState(() => {
        //         return{shoppingCartQueue: tempCart1};
        //     }, () => {
        //         this.calculateTotal();
        //     });
        // }
    };

    //removeItem: Remueve un producto en específico del carrito.
    removeItem = productName => {
        let auxProducts = [...this.state.products];
        let tempCart = this.state.shoppingCart;
        tempCart = tempCart.heap.filter(item => item[0].productName !== productName);

        const index = auxProducts.indexOf(this.getItem(productName));
        let removed = auxProducts[index];
        removed.inCart = false;
        removed.total = 0;
        removed.count = 0;

        let newCart = new PriorityQueue();
        newCart.heap = tempCart;


        this.setState(() => {
            return {shoppingCart: newCart, products: [...auxProducts]}
        });

    };

    //clearCart: Limpia por completo el carrito.
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

    //calculateTotal: calcula el subtotal, los impuestos y el total de los productos añadidos al carrito.
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
                search: this.search,
                getSearch: this.getSearch,
                setSearch: this.setSearch,
                clearSearch: this.clearSearch,
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