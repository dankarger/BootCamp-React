import React from "react";
import store from "./store";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import {BrowserRouter,Link} from "react-router-dom";


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state ={productsList:[]}
        this.data = store

    }


    componentDidMount() {
        this.setState({productsList:this.data})

    }
    renderProducts() {
        if (this.state.productsList.length > 0) {
            return  this.state.productsList.map(product => {
                return <Product key={product.id} product={product}/>
            })
        }

    }


    render() {
        return(
            <div>
                products
                {this.state.productsList.length}
                {this.renderProducts()}
            </div>
        )
    }
}

export default Products