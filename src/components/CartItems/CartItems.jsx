import React from 'react';
import Item from './Item/Item';

const CartItems = (props) => {
    return (
        <div className="cartItems d-grid gap-2 p-4 d-none">
            {props.items.map((item) => (
                <Item
                    item={item}
                    removeFromCart={props.removeFromCart}
                    decrementCount={props.decrementCount}
                    incrementCount={props.incrementCount}
                    state={props.state}
                />
            ))}
            ;
        </div>
    );
};

export default CartItems;
