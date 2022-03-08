import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Products from './components/Products'

class App extends React.Component<any, any> {
  handleAddToCart: any;

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      category: '',
      categories: [],
      sort: ''
    }
    this.handleChangeSort = this.handleChangeSort.bind(this);
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
            )}
      }

      return { filteredProducts: state.products }
    })
  }

  handleChangeCategory = (e) => {
    (console.log("handleChangeCategory"))
    this.setState({ category: e.target.value })
    this.listProducts()
  }

  render() {
    return (
      <div className="Container">
        <h1>Online store using react</h1>
        <hr />
        <div className="col-md-8">
          <Filter category={this.state.category}
            categories={this.state.categories}
            handleChangeCategory={this.handleChangeCategory}
            count={this.state.filteredProducts.length}
            sort={this.state.sort}
            handleChangeSort={this.handleChangeSort} />
          <hr />
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
        </div>

        <div className="col-md-4">

        </div>
      </div>
    );
  }

}

export default App;
