import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./components/Library";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library />}></Route>
        <Route path="/create" element={<CreateBook />}></Route>
        <Route path="/edit/:id" element={<EditBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
