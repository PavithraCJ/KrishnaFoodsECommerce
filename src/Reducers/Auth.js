// auth.js

import axios from 'axios';

// Action Types
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk Action for Login
export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('http://localhost:8080/signup/login', { email, password });
    dispatch(loginSuccess(response.data));
    localStorage.setItem('user', JSON.stringify(response.data));
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
};

// Initial State
const initialState = {
  loading: false,
  user: null,
  error: null,
};

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
