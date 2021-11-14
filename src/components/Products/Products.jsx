import React from 'react';
import Product from './Product/Product';

const Products = (props) => {
    return (
        <div className="products d-grid gap-2 p-4">
            <div className="row">
                {props.products.map((product) => (
                    <Product product={product} addToCart={props.addToCart} />
                ))}
                ;
            </div>
        </div>
    );
};
export default Products;
