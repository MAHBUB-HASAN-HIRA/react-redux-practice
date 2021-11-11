import axios from 'axios';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userType';


export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};


export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const allUsers = response.data;
                dispatch(fetchUsersSuccess(allUsers));
            }).catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
            })
    };
};