import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import Basket from './components/Basket';

class ProductsContainer extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredProducts: [],
            category: '',
            categories: [],
            sort: '',
            cartItems: []
        }
        this.handleChangeSort = this.handleChangeSort.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    componentDidMount = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                const categories = data.map(x => x.category)
                    .filter((category, index, arr) => arr.indexOf(category) === index)
                    .sort();;

                this.setState({
                    products: data,
                    filteredProducts: data,
                    category: '',
                    categories: categories

                })
            })

        if (localStorage.getItem("cartItems")) {
            this.setState({ cartItems: JSON.parse(localStorage.getItem("cartItems")) })
        }
    }

    handleChangeSort = (e) => {
        (console.log("handleChangeSort"))
        this.setState({ sort: e.target.value })
        this.listProducts()
    }

    listProducts = () => {
        (console.log("listProducts", this.state.sort))
        this.setState(state => {
            console.log("setState", state)
            if (state.sort !== "") {
                state.products.sort((a, b) => (state.sort === "lowest") ?
                    (a.price > b.price ? 1 : -1)
                    : (a.price < b.price ? 1 : -1))
            } else {
                state.products.sort((a, b) => (a.id > b.id ? 1 : -1))
            }

            if (state.category !== "") {
                return {
                    filteredProducts: state.products.filter((p) =>
                        p.category.indexOf(state.category) >= 0
                    )
                }
            }

            return { filteredProducts: state.products }
        })
    }

    handleChangeCategory = (e) => {
        (console.log("handleChangeCategory"))
        this.setState({ category: e.target.value })
        this.listProducts()
    }

    handleAddToCart(e, product) {
        (console.log("handleAddToCart"))
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;
            cartItems.forEach(item => {
                if (item.id === product.id) {
                    productAlreadyInCart = true;
                    item.count++;
                }
            });
            if (!productAlreadyInCart) {
                cartItems.push({ ...product, count: 1 })
            }

            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return cartItems;
        })
    }

    handleRemoveFromCart(e, item) {
        (console.log("handleRemoveFromCart"))
        this.setState(state => {
            const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
            localStorage.setItem("cartItems", cartItems);
            return { cartItems }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Filter category={this.state.category}
                            categories={this.state.categories}
                            handleChangeCategory={this.handleChangeCategory}
                            count={this.state.filteredProducts.length}
                            sort={this.state.sort}
                            handleChangeSort={this.handleChangeSort} />
                        <hr />
                        <Products
                            products={this.state.filteredProducts}
                            handleAddToCart={this.handleAddToCart} />
                    </div>

                    <div className="col-md-4">
                        <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}></Basket>
                    </div>
                </div>
            </div>
        );
    }

}
export default ProductsContainer;