import React from "react";
import './Router.css'
import Header from "./Header";
import Products from "./Products";
import HomePage from "./HomePage";
import {BrowserRouter, Route, Link} from 'react-router-dom';

import ProductDetail from "./ProductDetail";

const PageOne = ()=> {
    return (<div>
      <HomePage/>
        {/*<Link to='/products' > Navigate to products page</Link>*/}
         <button>ClickME</button>
    </div> )
}

const HeaderComponent = () =>{
    return (
        <div>
            <Header />
        </div>
    )
}

const ProductDetailComponent = (product)=>{
    return <div><ProductDetail product={product}/> {product}</div>
}

const ProductsPage = ()=>{
    return (
        <div><Products />
        <Link to='/products' > Navigate to products page</Link>

        </div>
    )
}

// const ProductDetailComponent = ()=>{
//     return (
//         <div>
//             <ProductDetail product={product}
//         </div>
//     )
//
// }

class  RouterApp extends React.Component {

    CreateProductView=()=>{
        console.log('pppppppp')
    }

    render() {
        return(
            <div className='RouterApp'>
          <BrowserRouter>
              <div>
                  <Route path='/'  component={HeaderComponent} />
                  <Route path='/' exact component={PageOne} />
                  <Route path='/products' component={ProductsPage} />
                  <Route path='/products' component={ProductsPage} />
                  <Route path={`/product/`} component={ProductDetailComponent} />
                  <Route name="products2" path="/products/:id" handler={this.CreateProductView} />
              </div>
          </BrowserRouter>
            </div>
        )
    }
}

export default RouterApp