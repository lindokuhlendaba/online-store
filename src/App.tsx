import React from 'react';
import './App.css';
import Products from './components/Products'

class App extends React.Component<any, any> {
  handleAddToCart: any;

  /**
   *
   */
  state = {
    products: [],
    filteredProducts: []

  }

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
          filteredProducts: data
        })
      })
  }


  render() {
    return (
      <div className="Container">
        <h1>Online store using react</h1>
        <hr />
        <div className="col-md-8">
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
        </div>

        <div className="col-md-4">

        </div>
      </div>
    );
  }

}

export default App;
