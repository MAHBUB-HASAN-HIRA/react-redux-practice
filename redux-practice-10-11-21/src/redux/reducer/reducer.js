const initialFoodState = {
	food: 0,
};

export const foodReducer = (state = initialFoodState, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, food: state.food + 1 };
		case "decrement":
			const newState = state.food - 1;
			return newState >= 0 ? { ...state, food: newState } : { ...state };
		case "increment_custom":
			return {
				...state,
				food: state.food + Number(action.payload.incrementNumber),
			};
		case "decrement_custom":
			const newDecState = state.food - Number(action.payload.decrementNumber);
			return newDecState >= 0
				? {
						...state,
						food: newDecState,
				  }
				: { ...state };
		default:
			return state;
	}
};

const initialHouseState = {
	data: {
		example1: "example1Data1",
		house: 0,
	},
};

export const houseReducer = (state = initialHouseState, action) => {
	switch (action.type) {
		case "increment_house":
			return { ...state, data: { house: state.data.house + 1 } };
		case "decrement_house":
			const newState = state.data.house - 1;
			return newState >= 0
				? { ...state, data: { house: newState } }
				: { ...state };
		case "increment_custom_house":
			return {
				...state,
				data: {
					house: state.data.house + Number(action.payload.incrementNumber),
				},
			};
		case "decrement_custom_house":
			const newDecState =
				state.data.house - Number(action.payload.decrementNumber);
			return newDecState >= 0
				? {
						...state,
						data: { house: newDecState },
				  }
				: { ...state };
		default:
			return state;
	}
};

const initialUserState = {
	users: {
		numberOfUsers: [],
	},
};
export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
