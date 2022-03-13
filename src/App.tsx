import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from "react-router";
import './App.css';
import Product from './components/Product';
import ProductsContainer from './ProductsContainer';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="Container">
        <h1>Online store using react</h1>
        <hr />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductsContainer />} />
            <Route path='/products' element={<ProductsContainer />} />
            <Route path="/product/:id" element={props => (<Product {...props} id={this.state} />)} />
          </Routes>

        </BrowserRouter>
      </div>
    );
  }

}

export default App;
