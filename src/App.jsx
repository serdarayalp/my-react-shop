import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        debugger;

        let existingItem = this.state.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({amount, name, price});
        }

        this.setState({items: currentItems});
        // console.log(this.state);
    }

    render() {
        return <React.Fragment>
            <Navbar/>
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} image="tomaten.jpg" title="Tomaten"
                             description="Füge Tomaten zu deinem Warenkorn hinzu."/>
                    <Product onAdd={() => this.addItem(1, 'Gurken', 5.99)} image="gurken.jpg" title="Gurken"
                             description="Füge Tomaten zu deinem Warenkorn hinzu."/>
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 3.99)} image="aepfel.jpg" title="Äpfel"
                             description="Füge Tomaten zu deinem Warenkorn hinzu."/>
                    <Product onAdd={() => this.addItem(1, 'Birnen', 4.99)} image="birnen.jpg" title="Birnen"
                             description="Füge Tomaten zu deinem Warenkorn hinzu."/>
                </div>
                <ShoppingCart items={this.state.items}/>
            </div>
        </React.Fragment>
    }
}

export default App;