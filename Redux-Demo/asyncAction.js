const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


const initialState = {
    loading: false,
    users: [],
    error:'',
};

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users:[],
                error: action.payload,
            }
        default:
            return state;
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const id = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(id));
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message));
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unSubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());