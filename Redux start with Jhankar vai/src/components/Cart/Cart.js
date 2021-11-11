import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removedFromCart } from '../../redux/Action.js/cartAction';

const Cart = () => {
    // const {removedFromCart, cart} = props;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return (
        <>
            { cart.length > 0 &&
                <div>
                    <h1>My Cart</h1>
                    {
                        cart.map(pd => 
                        <div key={pd.id} style={{width:'300px',border:'1px solid white', margin:'20px auto'}}>
                            <h3>Name: {pd.name}</h3>
                            <h3>price: {pd.price}</h3>
                            <h4>Quantity: {pd.quantity}</h4>
                            <button style={{border:'none', backgroundColor:'black', color:'#ffffff', padding:'8px 20px', borderRadius:'3px', cursor:'pointer'}}
                                onClick={() => dispatch(removedFromCart(pd.id))}>
                                Removed
                            </button>
                        </div>)
                    }
                </div>
            }
        </>
    );
};

// const mapStateToProps = state => {
//     return { 
//         cart: state.cart
//     }
// }

// const mapDispatchToProps = {
//     removedFromCart: removedFromCart,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
export default Cart;