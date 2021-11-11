import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
	name: "usersSlice",
	initialState: {
		users: [],
		error: false,
		loading: true,
	},

	reducers: {
		fetchUserStart: (state) => {
			state.loading = true;
		},

		fetchUsersSuccess: (state, action) => {
			state.users = action.payload;
			state.error = false;
			state.loading = false;
		},

		fetchUsersFailed: (state, action) => {
			state.users = [];
			state.loading = false;
			state.error = action;
		},
	},
});

export const fetchUser = () => {
	return async (dispatch) => {
		dispatch(fetchUserStart());
		await axios
			.get("https://randomuser.me/api/?results=50")
			.then((response) => {
				dispatch(fetchUsersSuccess(response.data.results));
			})
			.catch((error) => {
				dispatch(fetchUsersFailed(error.response.data));
			});
	};
};

export const { fetchUserStart, fetchUsersFailed, fetchUsersSuccess } =
	userSlice.actions;

export default userSlice.reducer;

// //using createAsyncThunk hook
// export const getUsers = createAsyncThunk(
// 	"user/getUser",
// 	async (dispatch, getState) => {
// 		return await fetch("https://randomuser.me/api/?results=50").then(
// 			(response) => response.json()
// 		);
// 	}
// );

// export const userSlice = createSlice({
// 	name: "usersSlice",
// 	initialState: {
// 		users: [],
// 		error: false,
// 		loading: true,
// 	},

// 	reducers: {
// 		deleteData: (state) => {
// 			state.users = [];
// 		},
// 	},

// 	extraReducers: {
// 		[getUsers.pending]: (state) => {
// 			state.loading = true;
// 		},

// 		[getUsers.fulfilled]: (state, action) => {
// 			state.users = action.payload.results;
// 			state.error = false;
// 			state.loading = false;
// 		},

// 		[getUsers.rejected]: (state, action) => {
// 			state.users = [];
// 			state.loading = false;
// 			state.error = action;
// 		},
// 	},
// });
// console.log(userSlice);

// export const { deleteData } = userSlice.actions;

// export default userSlice.reducer;
