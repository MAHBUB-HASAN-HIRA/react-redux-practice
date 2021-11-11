import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUY_ICE_CREAM } from "../../redux/iceCream/iceCreamType";

const IceCreamContainer = () => {
	const [number, setNumber] = useState(1);
	const numberOfIceCream = useSelector(
		(state) => state.iceCream.numberOfIceCream
	);
	const dispatch = useDispatch();
	// dispatch(buyIceCream(number, 'Mahbub'))
    // dispatch({ type: "BUY_ICE_CREAM", payload: { name: "Mahbub", number: 2 } })
	return (
		<div>
			<h2>Number Of Ice Cream: {numberOfIceCream}</h2>
			<input
				onChange={(e) => setNumber(e.target.value)}
				min="0"
				type="number"
			/>
			<button
				onClick={
					() => dispatch(BUY_ICE_CREAM(number, "Mahbub"))
				}
			>
				Buy IceCream
			</button>
		</div>
	);
};

export default IceCreamContainer;
