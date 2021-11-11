import { BUY_BREAD } from './breadType';

const initialState = {
    numberOfBread: 10
}

const breadReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BREAD:
            if (state.numberOfBread > 0) {
                return {
                    numberOfBread: state.numberOfBread - action.payload.breadNumber,
                }
            } else {
                return {
                    numberOfBread: state.numberOfBread,
                }
            }
    
        default:
            return state;
    }
}

export default breadReducer;