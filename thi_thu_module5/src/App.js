import './App.css';
import {Home} from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Register} from "./components/Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
