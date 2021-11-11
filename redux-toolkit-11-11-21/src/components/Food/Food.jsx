import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,increment_custom, decrement_custom } from "../../redux/Action-Slice/food/food.slice";
import Common from "../Common/Common";

const Food = () => {
	const {foodValue} = useSelector((state) => state.foods);
	const dispatch = useDispatch();
	return (
		<>
			<Common
				name="Food"
				defaultState={foodValue}
				dispatch={dispatch}
				increment={increment}
				decrement={decrement}
				decrement_custom_food={decrement_custom}
				increment_custom_food={increment_custom}
			/>
		</>
	);
};

export default Food;
