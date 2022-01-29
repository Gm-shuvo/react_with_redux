import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsersRequest, fetchUser} from "../redux";

import { useEffect } from "react";



const UserContainer = () => {
  const state = useSelector((state => state.users))
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersRequest())
    dispatch(fetchUser()) 
  }, []);
  
  console.log(state);

  return (
    <div></div>
  )
  
};

export default UserContainer;
