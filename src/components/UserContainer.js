import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsersRequest, fetchUsersFailuer, fetchUsersSucess } from "../redux";
import axios from 'axios';

import { useEffect } from "react";



const UserContainer = () => {
  const state = useSelector((state => state.users))
  
  const dispatch = useDispatch()
  
  const fetchUser = () => {
    return (dispatch) => {
      const newLocal = 'https://jsonplaceholder.typicode.com/users';
      axios.get(newLocal)
      .then(respons => dispatch(fetchUsersSucess(respons.data)))
      .catch(err => dispatch(fetchUsersFailuer(err.message)) )
    }
  } 

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
