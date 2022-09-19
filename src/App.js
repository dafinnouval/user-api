import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.scss";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import User from "./Components/User";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
