import { BUY_BURGER } from './burgerType';

const initialState = {
    numberOfBurger: 10,
};

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BURGER:
            if (state.numberOfBurger > 0) {
                return {
                    ...state,
                    numberOfBurger: state.numberOfBurger - action.payload.burgerNumber,
                } 
            } else {
                return {
                    numberOfBurger: state.numberOfBurger,
                }
            }
            
        default:
            return state;
    }
}

export default burgerReducer;