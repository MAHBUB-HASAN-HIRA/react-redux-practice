import { combineReducers } from "redux";
import { foodReducer, houseReducer, userReducer } from "./reducer/reducer";

const rootReducer = combineReducers({
	food: foodReducer,
	house: houseReducer,
	users: userReducer,
});

export default rootReducer;
