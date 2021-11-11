import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	decrement_custom,
	increment,
	increment_custom,
} from "../../redux/Action-Slice/home/home.slice";
import Common from "../Common/Common";

const House = () => {
	const { homeValue } = useSelector((state) => state.home);
	const dispatch = useDispatch();
	return (
		<>
			<Common
				name="House"
				defaultState={homeValue}
				dispatch={dispatch}
				increment={increment}
				decrement={decrement}
				decrement_custom_food={decrement_custom}
				increment_custom_food={increment_custom}
			/>
		</>
	);
};

export default House;
