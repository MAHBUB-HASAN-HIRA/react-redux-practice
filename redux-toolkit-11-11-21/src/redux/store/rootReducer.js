import { combineReducers } from "redux";
import foodReducer from "../Action-Slice/food/food.slice";
import homeReducer from "../Action-Slice/home/home.slice";
import userReducer from "../slice/user.slice";

const rootReducer = combineReducers({
	foods: foodReducer,
	home: homeReducer,
	user: userReducer,
});

export default rootReducer;
