import React from "react";
import logo from '../../assets/navbar/img/todo.png';
import './login.css'
const Login = (props)=>{
    return(
        <div className="flex">
            <img src={logo} alt="Login" className="login-img"/>
            <input className="form-control my-1" type="text" placeholder="UserName"/>
            <input className="form-control my-1" type="password" placeholder="Password"/>
            <button className="btn btn-info float-end my-1">Login</button>
        </div>
    )
}
export default React.memo(Login);