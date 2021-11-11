import { ADD_TO_CART, REMOVED_FROM_CART } from "../Action.js/cartAction";

const initialState = {
    cart:[],
    products:[
        {
            id:1,
            name:'Asus Laptop',
            price:85000,
        },
        {
            id:2,
            name:'Lenovo Laptop',
            price:45000,
        },
        {
            id:3,
            name:'Hp Laptop',
            price:50000,
        },
        {
            id:4,
            name:'Dell Laptop',
            price:80000,
        },
        {
            id:5,
            name:'Acer Laptop',
            price:40000,
        }
    ]
};

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART : 
        const sameProduct = state.cart.find(product => product.id === action.id);
        if(sameProduct){
            sameProduct.quantity = sameProduct.quantity + 1;
            sameProduct.price = sameProduct.price + action.price;
            const others = state.cart.filter(pd => pd.id !== sameProduct.id);
            const newCart = [...others, sameProduct];
            return { 
                cart: newCart,
                products: state.products,
            }
        } else{
            const cartProduct = {
                name: action.name,
                id: action.id,
                price: action.price,
                quantity: 1,
            };
            const newCart = [...state.cart, cartProduct];
            return { 
                cart: newCart,
                products: state.products,
            }
        }
        case REMOVED_FROM_CART: {
            const id = action.id;
            const afterRemoved = state.cart.filter(item => item.id !== id);

            return { 
                cart: afterRemoved,
                products: state.products
            };
        }
        default:{
            return state;
        }
    }
}