import { BUY_ICE_CREAM } from './iceCreamType';

const initialIceCreamState = {
    numberOfIceCream: 20,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            if (state.numberOfIceCream > 0) {
                console.log(action.payload.name);
                return {
                    ...state,
                    numberOfIceCream: state.numberOfIceCream - action.payload.number,
                }
            } else {
                return {
                    numberOfIceCream: state.numberOfIceCream,
                }
            }
        default:
            return state;
    }
}

export default iceCreamReducer;