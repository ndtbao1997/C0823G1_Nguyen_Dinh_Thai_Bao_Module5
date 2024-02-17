import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./components/Post";
import { store } from "./redux/store";
import { AddPost } from "./components/AddPost";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />}></Route>
          <Route path="/add-post" element={<AddPost />}></Route>
          <Route path="/edit-post/:id" element={<AddPost />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
