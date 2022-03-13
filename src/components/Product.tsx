import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Product extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount = () => {
        // eslint-disable-next-line no-useless-concat
        fetch("https://fakestoreapi.com/products" + `/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                debugger;
                this.setState({
                    product: data
                })
            })
    }

    render() {
        console.log(this.state, this.props.product.title)
        // eslint-disable-next-line no-unused-vars
        const { title, description, id, price, sku, image } = this.props.product
        return (
            <div className="container">
                <div className="back-to-products">
                    <Link to="/products">Back to Products</Link>
                </div>
                <h1>{title}</h1>
                <div className="details">
                    <div className="details-image">
                        <img src={image} alt={title} />
                        {/* <img src={`/products/${sku}_2.jpg`} alt={title}></img> */}
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                Price: <b>${price}</b>
                            </li>
                            <li>
                                Description:
                                <div>{description}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;