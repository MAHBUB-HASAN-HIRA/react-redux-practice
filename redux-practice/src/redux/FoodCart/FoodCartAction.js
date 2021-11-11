import { ADD_FOOD, REMOVED_All_FOOD, REMOVED_ONE_FOOD } from './FoodCartType';

export const addToCart = (product) => {
    return {
        type: ADD_FOOD,
        payload: product 
    }
}

export const removedOneFood = (id, quantity = 1, price) => {
    return {
        type: REMOVED_ONE_FOOD,
        payload: {
            id: id,
            quantity: quantity,
            price: price,
        }
    }
}

export const removedAllFood = id => {
    return {
        type: REMOVED_All_FOOD,
        payload: {
            id: id,
        }
    }
}