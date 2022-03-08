import React, { Component } from 'react';

class Basket extends Component<any> {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Cart is empty" : <div> You have {cartItems.length} in your cart </div>}
            </div>
        );
    }
}

export default Basket;