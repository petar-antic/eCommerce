import React from 'react';
import Item from './Item/Item';

const CartItems = (props) => {
    return (
        <div className="cartItems d-grid gap-2 p-4 d-none">
            {props.items.map((item, productId) => (
                <Item
                    item={item}
                    key={item + productId}
                    removeFromCart={props.removeFromCart}
                />
            ))}
            ;
        </div>
    );
};

export default CartItems;
