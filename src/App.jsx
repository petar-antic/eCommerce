import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import CartItems from './components/CartItems/CartItems';
import products from '../src/constants/products';

const storage = window.localStorage;
let initialCart = Object.values(storage).map((product) => JSON.parse(product));
storage.clear();

const App = () => {
    const [cartItems, setCartItems] = useState(initialCart);

    const addToCart = (productId) => {
        if (cartItems.filter((product) => product.id === productId).length) {
            addItem();
            return;
        }
        const addedProduct = products.filter(
            (product) => product.id === productId
        );
        storage.setItem(productId, JSON.stringify(addedProduct[0]));
        setCartItems([...cartItems, ...addedProduct]);
    };

    const removeFromCart = (itemId) => {
        const removedProduct = products.filter(
            (product) => product.id === itemId
        );
        storage.removeItem(itemId, JSON.stringify(removedProduct[0]));
        setCartItems(cartItems.filter((product) => product.id !== itemId));
    };

    // const number = document.querySelector('.number');
    const addItem = (e) => {
        console.log('next');
    };
    const removeItem = (e) => {
        console.log('Previous');
    };

    console.log(cartItems);

    return (
        <div className="container-inner bg-dark">
            <Navbar />
            <Products products={products} addToCart={addToCart} />
            <CartItems
                items={cartItems}
                removeFromCart={removeFromCart}
                addItem={addItem}
                removeItem={removeItem}
            />
        </div>
    );
};

export default App;

// if (cartItems.filter(product => product.id === productId)).length) return;
