import React from 'react';
import shoppingCart from './shoppingCart.png';

const Navbar = () => {
    const circleStyle = {
        height: '15px',
        width: '15px',
        top: '0px',
        right: '-3px',
        fontSize: '10px',
    };
    const openCartItems = (e) => {
        const items = document.querySelector('.cartItems');
        const products = document.querySelector('.products');
        items.classList.toggle('d-none');
        products.classList.toggle('d-none');
    };
    return (
        <nav className="navbar navbar-dark bg-dark px-3 sticky-top">
            <a
                className="navbar-brand"
                type="button"
                href
                onClick={() => window.location.reload()}
            >
                eCommerce
            </a>
            <div
                className="cartIcon position-relative"
                role="button"
                onClick={() => openCartItems()}
            >
                <img
                    src={shoppingCart}
                    alt="Shopping Cart"
                    width="32px"
                    height="32px"
                />
                <div
                    className="circle rounded-circle bg-danger text-center position-absolute text-white"
                    style={circleStyle}
                >
                    {localStorage.length}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
