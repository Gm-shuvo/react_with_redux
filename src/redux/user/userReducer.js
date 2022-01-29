import { FETCH_USER_FAILUER, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes";

const initailUser = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initailUser, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        users: []
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case FETCH_USER_FAILUER:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
  
}

export default userReducer