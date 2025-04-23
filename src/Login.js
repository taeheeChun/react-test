import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./Redux/user";

const Login = () => {
    const dispatch = useDispatch();
    return (
     <div>
         <button onClick={() => {dispatch(login({name: 'test', age: 20, email: 'tes'}))}}>
            Login
         </button>
     </div>
    )
}

export default Login;