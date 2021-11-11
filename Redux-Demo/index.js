const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREME = 'BUY_ICE_CREME';

function byuCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIceCreme() {
    return {
        type: BUY_ICE_CREME,
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreme: 20,
// };


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1,         
//             }

//         case BUY_ICE_CREME:
//             return {
//                 ...state,
//                 numOfIceCreme: state.numOfIceCreme - 1,         
//             }
//         default:
//             return state;
//     }
// }

const initialCakeState = {
    numOfCakes: 10,
};


const initialIceCremeState = {
    numOfIceCreme: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,         
            }

        default:
            return state;
    }
}


const iceCremeReducer = (state = initialIceCremeState, action) => {
    switch (action.type) {
        case BUY_ICE_CREME:
            return {
                ...state,
                numOfIceCreme: state.numOfIceCreme - 1,         
            }

        default:
            return state;
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCreme: iceCremeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initialState',  store.getState());
const unSubscribe = store.subscribe(() => console.log('Updated State', store.getState() ));
store.dispatch(byuCake());
store.dispatch(byuCake());
store.dispatch(buyIceCreme());
store.dispatch(buyIceCreme());
unSubscribe();