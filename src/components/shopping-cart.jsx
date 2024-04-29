import React, {Component} from 'react';

class ShoppingCart extends Component {
    state = {}

    render() {
        return <div className='shopping-cart'>
            <h2>Warenkorb</h2>
            {this.props.items.map(item => <div key={item.name}>{item.amount} X {item.name}</div>)}
        </div>
    }
}

export default ShoppingCart;