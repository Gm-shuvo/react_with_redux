import { FETCH_USER_FAILUER, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes";

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


