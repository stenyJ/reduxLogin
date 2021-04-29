import {SET_LOGIN_STATE} from './actionTypes'

const initialState = {
    isLoggedIn: false,
    users: [],
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOGIN_STATE:
        return {
          ...state,
          isLoggedIn: true, 
          users:action.payload
        };
      default:
        return state;
    }
  };
  export default loginReducer

