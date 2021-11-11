import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Action.js/cartAction';
import Product from '../Product/Product';

const Shop = () => {
// const {products, addToCart} = props;
const products = useSelector(state => state.products);
const dispatch = useDispatch();

    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(product => <Product key={product.id} product={product} addToCart={addToCart} dispatch={dispatch}/>)
            }
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         cart: state.cart,
//         products: state.products
//     };
// };

// const mapDispatchToProps = {
//     addToCart: addToCart
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Shop);
export default Shop;