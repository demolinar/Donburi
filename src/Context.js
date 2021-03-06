import React, {Component} from "react";
import product_array_list from "./components/ProductArrayListDriver";
import product_linked_list from "./components/ProductLinkedListDriver";

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        products: product_array_list,
        productsLinked: product_linked_list
    }

    handleDetail = () =>{
        console.log("This is your product Details");
    }

    addToCar = () => {
        console.log("Added to yor shopping car");
    }

    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                addToCar: this.addToCar(),
                handleDetail: this.handleDetail()
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};