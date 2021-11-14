import React from 'react';

const Product = ({ product, addToCart }) => {
    return (
        <div className="product col-lg-2 col-md-3 col-6 p-2">
            <div class="card bg-light text-center">
                <img
                    class="card-img-top"
                    alt="Card"
                    src={process.env.PUBLIC_URL + product.img}
                />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <button
                        onClick={() => addToCart(product.id)}
                        id={product.id}
                        type="button"
                        className="addBtn btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
