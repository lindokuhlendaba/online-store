import { Component } from 'react';
import { Link } from 'react-router-dom'

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
                <div className="details">
                    <div className="details-image" key={id}>
                        <img src={image} alt={title} width="300" height="300" />
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