import React from "react";


class ProductDetail extends React.Component {

    render() {
        return(
            <div>
                {this.props.product.title}
            </div>
        )
    }
}

export default ProductDetail