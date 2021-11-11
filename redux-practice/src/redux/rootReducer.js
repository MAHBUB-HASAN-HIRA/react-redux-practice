import { combineReducers } from "redux";
import burgerReducer from './burger/burgerReducer';
import breadReducer from './bread/breadReducer';
import foodReducer from './AllFood/AllFoodReducer';
import foodCartReducer from './FoodCart/FoodCartReducer';

const rootReducer = combineReducers({
    burger: burgerReducer,
    bread: breadReducer,
    totalFood: foodReducer,
    myCart: foodCartReducer,
});

export default rootReducer;