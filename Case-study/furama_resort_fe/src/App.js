import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Villa from "./components/Villa";
import {Login} from "./components/Login";
import Home from "./components/Home";
import Room from "./components/Room";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                    </Route>
                    <Route path="/villa" element={<Villa/>}></Route>
                    <Route path="/house" element={<Home/>}></Route>
                    <Route path="/room" element={<Room/>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </Provider>
    );
}
