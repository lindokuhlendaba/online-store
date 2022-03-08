import React, { Component } from 'react';
import { formatCurrency } from '../helpers/util';

class Basket extends Component<any> {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Cart is empty" : <div> You have {cartItems.length} in your cart </div>}
                {cartItems.length > 0 &&

                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <b>{item.title}</b>
                                    X {item.count} = {formatCurrency(item.price * item.count)} {/* Can be extracted to a helper function */}

                                    <button className="btn btn-danger"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                                    >X</button>
                                </li>

                            )}
                        </ul>
                        Total: {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))} {/* Can be extracted to a helper function */}
                    </div>
                }
                <button className="btn btn-primary" onClick={(e) => alert("Checkout needs to be implemented...")}></button>

            </div>
        );
    }
}

export default Basket;