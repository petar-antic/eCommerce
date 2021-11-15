import React from 'react';

const Item = ({
    item,
    removeFromCart,
    decrementCount,
    incrementCount,
    state,
}) => {
    return (
        <div className="p-2" id={item.id}>
            <div class="card bg-light align-items-center flex-row">
                <img
                    class="card-img-left border-right"
                    alt="Card"
                    src={process.env.PUBLIC_URL + item.img}
                    height="200px"
                />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                </div>
                <div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        id={item.id}
                        type="button"
                        className="addBtn btn btn-danger me-3"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Remove Item
                    </button>
                    <ul className="pagination p-2">
                        <li
                            className="page-item"
                            onClick={() => decrementCount(item.id)}
                            type="button"
                        >
                            <a className="page-link" href aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="number page-link" href id={state.id}>
                                {state.count}
                            </a>
                        </li>
                        <li
                            className="page-item"
                            onClick={() => incrementCount(item.id)}
                            type="button"
                        >
                            <a className="page-link" href aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Item;
