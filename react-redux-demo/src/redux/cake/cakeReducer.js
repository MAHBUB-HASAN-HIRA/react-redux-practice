import { BUY_CAKE } from './cakeType';

const initialState = {
    numberOfCake: 10,
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            if (state.numberOfCake > 0) {
                return {
                    ...state,
                    numberOfCake: state.numberOfCake - 1,
                }
            } else {
                return {
                    numberOfCake: state.numberOfCake,
                }
            }
        default:
            return state;
    };
};

export default cakeReducer;