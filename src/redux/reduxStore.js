import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import reducerUsers from './reducerUsers';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: reducerUsers,
  auth: authReducer,
  form: formReducer,
  app: appReducer
}); 

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store;

export default store;