import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import store from '../redux/store';
import {buycake} from '../redux';
;

const HooksCakeContainer = () => {
  const numberOfCake = useSelector(store => store.numberOfCake)
  const dispatch = useDispatch()
  return <div>
    <h2>Number of cake - {numberOfCake} </h2>
    <button onClick={()=> dispatch(buycake())}>buy cake</button>
  </div>;
};

export default HooksCakeContainer;
