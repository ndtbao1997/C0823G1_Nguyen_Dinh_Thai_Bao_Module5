import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pig } from "./components/Pig";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pig />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
