import React from 'react';

const Cart = ({ product, handleOne, handleAll }) => {
    return (
        <section className='product_container cart'>
            <h2>Your {product.name}</h2>
            <h3>Total Item: {product.quantity}</h3>
            <h4>Total Price: {product.totalPrice}</h4>
            <button onClick={() => handleOne(product.id, product.price)} className='one'>Delete One</button>
            <button onClick={() => handleAll(product.id)}>Delete All</button>
        </section>
    );
};

export default Cart;