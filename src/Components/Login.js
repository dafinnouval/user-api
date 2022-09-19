import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = async () => {
        try {
            // console.log(email, password);
            const item = { email: email, password: password };
            const response = await axios.post(`https://reqres.in/api/login/`, item);

            console.log(response.data, "<== response login");
            alert("Berhasil Login");
        } catch (error) {
            console.log(error, "<== error submit login");
            alert("Gagal Login");
        }
    };
    return (
        <div className="login-page">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <h1>Login Page</h1>
                    <div className="card-body">
                        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control"></input>
                        <br />
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control"></input>
                        <br />
                        <button onClick={submitLogin} className="btn btn-login">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
