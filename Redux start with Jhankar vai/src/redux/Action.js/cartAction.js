export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVED_FROM_CART = 'REMOVED_FROM_CART';

export const addToCart = (id, price, name) => {
    return { type: ADD_TO_CART, id, price, name };
};

export const removedFromCart = id => {
    return { type: REMOVED_FROM_CART, id };
};