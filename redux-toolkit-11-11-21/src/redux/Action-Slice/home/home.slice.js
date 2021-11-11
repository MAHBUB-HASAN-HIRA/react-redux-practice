import { createSlice } from "@reduxjs/toolkit";

export const homeCounterSlice = createSlice({
	name: "homeCounter",
	initialState: {
		homeValue: 5,
	},
	reducers: {
		increment: (state) => {
			state.homeValue = state.homeValue + 1;
		},
		decrement: (state) => {
			const newValue = state.homeValue - 1;
			newValue >= 0 && (state.homeValue = newValue);
		},
		increment_custom: (state, action) => {
			console.log(action);

			state.homeValue =
				state.homeValue + Number(action?.payload?.incrementNumber);
		},
		decrement_custom: (state, action) => {
			const newValue =
				state.homeValue - Number(action?.payload?.decrementNumber);
			newValue >= 0 && (state.homeValue = newValue);
		},
	},
});

export const { increment, decrement, increment_custom, decrement_custom } =
	homeCounterSlice.actions;

export default homeCounterSlice.reducer;
