const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default
const axios = require("axios");
const initialState = {
    loading: true,
    date: [],
    error: ""
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: 
        return {
            ...state,
            loading: true,
        };

        case FETCH_USERS_SUCCESS: 
        return {
            loading: false,
            date: action.payload,
            error: "",
        }

        case FETCH_USERS_FAILURE: 
        return {
            loading: false,
            date:[],
            error: action.payload
        }
    }
}

const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users/2")
        .then( (response) => {
            const user = response.date;
            dispatch(fetchUsersSuccess(user))
        })
        .catch( (error) => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
const store = createStore(reducer , applyMiddleware(thunkMiddleware));
store.subscribe( () => {
    console.log(store.getState())
});
store.dispatch(fetchUser())