import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: !state.isAuth }
    default:
      return state;
  }
}

export const setUserData = (userId, email, login) => {
  return { type: SET_USER_DATA, data: { userId, email, login } }
}

export const getAuthInfo = () => (dispatch) => {
  return authAPI.getAuthInfo()
    .then(data => {
      if (data.resultCode === 0) {
        const { email, id, login } = data.data;
        dispatch(setUserData(id, email, login));
      }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthInfo());
      }
      else {
        dispatch(stopSubmit("loginForm", { _error: data.messages[0] }))
      }
    });
}

export const logout = () => dispatch => {
  authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null))
      }
    })
}

export default authReducer;