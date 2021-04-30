import axios from 'axios'
import {SET_LOGIN_STATE} from './actionTypes'
import {SET_LOGOUT_STATE} from './actionTypes'

const setLoginState = users => {
    return {
      type: SET_LOGIN_STATE,
      payload:users
    }; 
  };

  export const setLogoutState = () => {
    return {
      type: SET_LOGOUT_STATE,
    }; 
  };

  export const fetchUsers = (username,password) => {
    return (dispatch) => {
      axios.post('https://www.crick3tsocial.com/mobile/includes/ajaxFromApp.php?request=loginUser', {
      signinUsername: username,
      signinPassword: password
    })
      .then(response => {
        if(response.data.status=='success'){
          const users = response.data
          dispatch(setLoginState(users))
        }else{
          alert("Incorrect UserName and Password")
        }
        })
      .catch(error => {
        console.log(error.message)
      })
    }
  }
