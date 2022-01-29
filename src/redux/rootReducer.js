import userReducer from "./user/userReducer";
import cakeReducer from './cake/cakeReducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: userReducer,
  cake: cakeReducer
})

export default rootReducer;
