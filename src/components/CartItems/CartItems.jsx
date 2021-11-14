import React from 'react';
import Item from './Item/Item';

const CartItems = (props) => {
    return (
        <div className="cartItems d-grid gap-2 p-4 d-none">
            {props.items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    removeFromCart={props.removeFromCart}
                    addItem={props.addItem}
                    removeItem={props.removeItem}
                />
            ))}
            ;
        </div>
    );
};

export default CartItems;
