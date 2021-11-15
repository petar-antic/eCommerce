import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import CartItems from './components/CartItems/CartItems';
import products from '../src/constants/products';

const storage = window.localStorage;
let initialCart = Object.values(storage).map((product) => JSON.parse(product));

const App = () => {
    const [cartItems, setCartItems] = useState(initialCart);

    const addToCart = (productId) => {
        if (cartItems.filter((product) => product.id === productId).length) {
            incrementCount(productId);
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

    const [state, setState] = useState({ id: '', count: 1 });

    function decrementCount(itemId) {
        setState((prevState) => {
            return { itemId, count: prevState.count - 1 };
        });
    }

    function incrementCount(itemId) {
        setState((prevState) => {
            return { itemId, count: prevState.count + 1 };
        });
    }

    return (
        <div className="container-inner bg-dark">
            <Navbar />
            <Products products={products} addToCart={addToCart} />
            <CartItems
                items={cartItems}
                removeFromCart={removeFromCart}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                state={state}
            />
        </div>
    );
};

export default App;
