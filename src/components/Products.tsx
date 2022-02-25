import React, { Component } from 'react';
import { formatCurrency } from '../helpers/util';

export default class Products extends Component<any>{
    render() {
        console.log("this.props.products")
        console.log(this.props.products)
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
                        <img src={product.image} alt={product.title} />
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>{formatCurrency(product.price)}</b>
                        <button className="btn btn-primary" onClick={(e) => this.props.handleAddToCart(e, product)}>Add To Cart</button>
                    </div>
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