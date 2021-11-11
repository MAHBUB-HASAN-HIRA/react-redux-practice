import { ADD_FOOD, REMOVED_All_FOOD, REMOVED_ONE_FOOD } from './FoodCartType';

const initialState = {
    cart: [],
}

const foodCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOOD:
            const sameProduct = state.cart.find(pd => pd.id === action.payload.id);
            if (sameProduct) {
                sameProduct.quantity = Number(sameProduct.quantity) + Number(action.payload.quantity);
                sameProduct.totalPrice = Number(sameProduct.totalPrice) + Number(action.payload.totalPrice);
                const indexNumber = state.cart.findIndex(pd => pd.id === action.payload.id);
                const newCart = [...state.cart];
                newCart[indexNumber] = sameProduct;
                return {
                    cart: newCart,
                }
            } else {
                const newCart = [...state.cart, action.payload];
                return {
                    cart: newCart
                }
            }

        case REMOVED_ONE_FOOD:
            const removedFood = state.cart.find(pd => pd.id === action.payload.id);
            if (removedFood) {
                removedFood.quantity = Number(removedFood.quantity) - Number(action.payload.quantity);
                if (removedFood.quantity <= 0) {
                    const quantityIsZero = state.cart.filter(pd => pd.id !== action.payload.id);
                    return {
                        cart: quantityIsZero,
                    }
                } else {
                    removedFood.totalPrice = Number(removedFood.totalPrice) - Number(action.payload.price);
                    const indexNumber = state.cart.findIndex(pd => pd.id === action.payload.id);
                    const newCart = [...state.cart];
                    newCart[indexNumber] = removedFood;

                    return {
                        cart: newCart,
                    }
                }

            } else {
                const newCart = [...state.cart, action.payload];
                return {
                    cart: newCart
                }
            }

        case REMOVED_All_FOOD:
            const afterRemoved = state.cart.filter(pd => pd.id !== action.payload.id);
            return {
                cart: afterRemoved,
            }

        default:
            return state
                ;
    }
}

export default foodCartReducer;