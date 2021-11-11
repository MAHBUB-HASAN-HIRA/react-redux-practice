import React, { useState } from "react";

const Common = (props) => {
	const {
		name,
		defaultState,
		dispatch,
		increment,
		decrement,
		decrement_custom_food,
		increment_custom_food,
	} = props;

	const [incrementNumber, setIncrementNumber] = useState("");
	const [decrementNumber, setDecrementNumber] = useState("");

	const handleIncrement = () => {
		if (incrementNumber?.length) {
			dispatch(increment_custom_food({ incrementNumber: incrementNumber }));
			setIncrementNumber("");
		}
	};

	const handleDecrement = () => {
		if (decrementNumber?.length) {
			dispatch(decrement_custom_food({ decrementNumber: decrementNumber }));
			setDecrementNumber("");
		}
	};
	return (
		<div className="wrapper">
			<div className="top">
				<h1>
					Total {name} {defaultState}
				</h1>
			</div>
			<div className="center">
				<div className="content">
					<p>Increment by 1</p>
					<button onClick={() => dispatch(increment())}>Increment</button>
				</div>
				<div className="content">
					<p>Decrement by 1</p>
					<button onClick={() => dispatch(decrement())}>Decrement</button>
				</div>
			</div>
			<div className="center">
				<div className="content">
					<p>Increment by custom</p>
					<input
						value={incrementNumber}
						onChange={(e) => setIncrementNumber(e.target.value)}
						type="number"
						min="0"
						placeholder="0"
					/>
					<button onClick={handleIncrement}>Increment Custom</button>
				</div>
				<div className="content">
					<p>Decrement by custom</p>
					<input
						value={decrementNumber}
						onChange={(e) => setDecrementNumber(e.target.value)}
						type="number"
						min="0"
						placeholder="0"
					/>
					<button onClick={handleDecrement}>Decrement Custom</button>
				</div>
			</div>
		</div>
	);
};

export default Common;
