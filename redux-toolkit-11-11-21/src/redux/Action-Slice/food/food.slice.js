import { createSlice } from "@reduxjs/toolkit";

export const foodCounterSlice = createSlice({
	name: "foodCounter",
	initialState: {
		foodValue: 0,
	},
	reducers: {
		increment: (state) => {
			state.foodValue = state.foodValue + 1;
		},
		decrement: (state) => {
			const newValue = state.foodValue - 1;
			newValue >= 0 && (state.foodValue = newValue);
		},
        increment_custom: (state, action) => {
			state.foodValue = state.foodValue + Number(action?.payload?.incrementNumber);
		},
        decrement_custom: (state, action) => {
			const newValue = state.foodValue - Number(action?.payload?.decrementNumber);
			newValue >= 0 && (state.foodValue = newValue);
		},
	},
});

export const { increment, decrement, increment_custom, decrement_custom } =
	foodCounterSlice.actions;

export default foodCounterSlice.reducer;
