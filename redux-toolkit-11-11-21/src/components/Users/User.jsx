import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUsersFailed } from "../../redux/slice/user.slice";

const User = () => {
	const { user } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleLoad = () => {
		dispatch(fetchUser());
		// dispatch(getUsers());
	};

	const handleDelete = () => {
		// dispatch(deleteData());
		dispatch(fetchUsersFailed());
	};
	useEffect(() => {
		// dispatch(getUsers());
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<div className="wrapper">
			<button onClick={handleLoad}>Load Data</button>
			<button onClick={handleDelete}>DeleteData</button>
			{user.loading ? (
				<h1>Loading...</h1>
			) : user?.users?.length ? (
				<div>
					{user.users.map((user, index) => (
						<div key={index}>
							<p>Name: {user?.name?.title}</p>
							<p>Gender: {user?.gender}</p>
							<p>Email: {user?.email}</p>
						</div>
					))}
				</div>
			) : (
				<h2>There is no data</h2>
			)}
		</div>
	);
};
export default User;
