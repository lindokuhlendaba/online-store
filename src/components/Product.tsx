import { Component } from 'react';
import { Link } from 'react-router-dom'
import { formatCurrency } from '../helpers/util';

class Product extends Component<any, any> {

    state = {
        product: [],
        id: ""
    }

    componentDidMount = () => {
        console.log("ProductId", this.props.id)
        this.fetchData(this.props.id);
    };

    fetchData = (id: number) => {
        // eslint-disable-next-line no-useless-concat
        fetch("https://fakestoreapi.com/products/" + `${id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    product: data,
                    id: id
                })
            })
    };

    render() {
        // eslint-disable-next-line no-unused-vars
        const { title, description, id, price, image } = this.state.product as any
        return (
            <div className="container">
                <div className="back-to-products">
                    <Link to="/products">Back to Products</Link>
                </div>
                <h1>{title}</h1>

                <div className="row">
                    <div className="col-md-4">
                        <div className="details-image" key={id}>
                            <img src={image} alt={title} width="300" height="300" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="details-info">
                            <b>Description:</b>
                            <div>{description}</div>
                        </div>
                        <br></br>
                        <div className="details-info">
                            <b>Price:</b>
                            <div><b>{formatCurrency(price)}</b></div>
                        </div>
                    </div>

                    {/* <div className="col-md-4">
                        <button className="btn btn-primary btn-lg" onClick={(e) => this.props.handleAddToCart(e, this.state.product)}>Add To Cart</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Product;