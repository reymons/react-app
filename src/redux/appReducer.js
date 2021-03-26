import { getAuthInfo } from "./authReducer";

const INITIALIZE_APP = "INITIALIZE_APP";

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZE_APP:
      return { ...state, initialized: true }
    default:
      return state;
  }
}

const initialize = () => ({ type: INITIALIZE_APP })

export const initializeApp = () => async (dispatch) => {
  dispatch(getAuthInfo())
    .then(() => dispatch(initialize()));
}

export default appReducer;