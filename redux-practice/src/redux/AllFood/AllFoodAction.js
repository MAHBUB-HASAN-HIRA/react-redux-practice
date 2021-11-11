import { GET_FOOD, UPDATED_FOOD } from './AllFoodType';

export const getFood = () => {
    return {
        type: GET_FOOD,
    }
};

export const updatedFood = (id, quantity = 1) => {
    return {
        type: UPDATED_FOOD,
        payload: {
            id: id,
            quantity: quantity,
        }
    }
}