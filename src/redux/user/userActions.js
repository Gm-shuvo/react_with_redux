import { FETCH_USER_FAILUER, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes";

import axios from 'axios';



export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUsersSucess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailuer = (error) => {
  return {
    type: FETCH_USER_FAILUER,
    payload: error
  }
}


///Fetch Users from API
export const fetchUser = () => {
    return (dispatch) => {
      const newLocal = 'https://jsonplaceholder.typicode.com/users';
      axios.get(newLocal)
      .then(respons => dispatch(fetchUsersSucess(respons.data)))
      .catch(err => dispatch(fetchUsersFailuer(err.message)) )
    }
  } 