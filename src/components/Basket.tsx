import React, { Component } from 'react';

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
                                     X {item.count}
                                    <button className="btn btn-danger"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                                    >X</button>
                                </li>

                            )}
                        </ul>


                    </div>
                }
            </div>
        );
    }
}

export default Basket;