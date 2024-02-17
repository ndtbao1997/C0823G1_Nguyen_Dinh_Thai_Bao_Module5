import { Provider } from "react-redux";
import "./App.css";
import { User } from "./components/User";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
