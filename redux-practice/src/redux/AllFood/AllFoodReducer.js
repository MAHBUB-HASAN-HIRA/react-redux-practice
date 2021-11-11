import { GET_FOOD, UPDATED_FOOD } from './AllFoodType';

const initialFoodState = {
    allFood: [
        {
            id: 1,
            name: 'Beaf Curry',
            quantity: 25,
            price: 50
        },
        {
            id: 2,
            name: 'Chicken Curry',
            quantity: 10,
            price: 40
        },
        {
            id: 3,
            name: 'Fish Curry',
            quantity: 35,
            price: 25
        },
        {
            id: 4,
            name: 'Vegetable Curry',
            quantity: 25,
            price: 15
        },
    ]
};

const foodReducer = (state = initialFoodState, action) => {
    switch (action.type) {
        case GET_FOOD:
            return {
                allFood: state.allFood
            }
        
        case UPDATED_FOOD: 
            const updatedProduct = state.allFood.find(pd => pd.id === action.payload.id);
            updatedProduct.quantity = Number(updatedProduct.quantity) - Number(action.payload.quantity);
            const indexNumber = state.allFood.findIndex(pd => pd.id === action.payload.id);
            const newFood = [...state.allFood];
            newFood[indexNumber] = updatedProduct;
            return {
                allFood: newFood,
            }
        default:
            return state;
    }
}

export default foodReducer;