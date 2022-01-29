import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const UserContainer = () => {
  const {loading, users} = useSelector((state => state.users))
  console.log(loading, users);
  return (
    <div></div>
  )
  
};

export default UserContainer;
