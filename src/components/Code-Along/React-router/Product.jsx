import React from "react";
import './Product.css'
import ProductDetail from "./ProductDetail";
import {BrowserRouter, Link, } from "react-router-dom";

const ProductDetailRoute = ()=>{


}

class Product extends React.Component {

    render(){
        const{product}=this.props
        const backUrl = '/'
        return(
            <div className='Product' id={product.id}>
                <h2>{product.title}</h2>
                <img className='Product-img' src={product.imageUrl} alt={product.title}/>
                <h3>size: {product.size}</h3>
                <h3>Price: {product.price}</h3>
                <button >Detail</button>
                {/*<Link to="${'product/'{product.id}}" > Detail</Link>*/}
                <Link to={{pathname: `/${Product.id}`, query: {backUrl}}} />
                    <div>
                        <Link to={`/products/${product.id}`} activeClassName="current" >{product.title}</Link>
                    </div>
            </div>
        )
    }
}

export default Product