import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer />
        <UserContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
