import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import  loginReducer  from './loginReducer';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
});

const store = createStore(
  rootReducer,applyMiddleware(thunkMiddleware)
);
export default store