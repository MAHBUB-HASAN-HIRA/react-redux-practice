import React from 'react';

const Product = ({product, addToCart, dispatch}) => {
    const {name, id, price} = product;
    return (
        <div style={{width:'500px', height:'200px', textAlign:'center', borderRadius:'5px', border:"1px solid red", margin:'20px auto'}}>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <button style={{border:'none', backgroundColor:'black', color:'#ffffff', padding:'8px 20px', borderRadius:'3px', cursor:'pointer'}}
                onClick={() => dispatch(addToCart(id, price, name))}>
                Add To Cart
                </button>
        </div>
    );
};

export default Product;