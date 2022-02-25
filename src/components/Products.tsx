import React, { Component } from 'react';

export default class Products extends Component<any>{
    render() {
        console.log("this.props.products")
        console.log(this.props.products)
        const productItems = this.props.products.map(product => (
            <div className="col-md-4">
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
                        <img src={product.image} alt={product.title} />
                    </a>
                </div>
            </div>
        ))
        return (
            <div className="row">
                {productItems}
            </div>
        );
    }
}