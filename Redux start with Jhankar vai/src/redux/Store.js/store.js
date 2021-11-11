import { createStore } from "redux";
import { cartReducer } from "../Reducer.js/cartReducer";

 const store = createStore(cartReducer);

 export default store;