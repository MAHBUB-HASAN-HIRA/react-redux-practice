import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removedAllFood, removedOneFood } from '../../../redux/index';
import Cart from '../Cart/Cart';
const CartContainer = () => {
    const cart = useSelector(state => state.myCart.cart);
    const disPatch = useDispatch();
    const handleOne = (id, price) => disPatch(removedOneFood(id, 1, price));
    const handleAll = id => disPatch(removedAllFood(id));

    return (
        <section className=''>
            <h2>My Cart</h2>
            {
                cart.length > 0 && cart.map(product => <Cart key={product.id} product={product} handleOne={handleOne} handleAll={handleAll} />)
            }
        </section>
    );
};

export default CartContainer;




