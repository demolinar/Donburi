import React, {Component} from "react";
import product_array_list from "./components/ProductArrayListDriver";

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        products: product_array_list
    }

    addToCar = () => {
        console.log("Added to yor shopping car");
    }

    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                addToCar: this.addToCar()
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};