import { useContext, useRef } from "react"
import "./login.css"
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const email = useRef();
    const password = useRef();
    const{user, isFetching, error, dispatch} = useContext(AuthContext);
    
    const Submit = async (e) => {
        e.preventDefault();
        // dispatch({type: "LOGIN_START"});
        // try {
        //     const res = await axios.post("https://musasocialapi.herokuapp.com/auth/login", {email: email.current.value, password: password.current.value});
        //     dispatch({type: "LOGIN_SUCCESS", payload: res.data.accesstoken});
        //     history.push("/")
        
        // } catch (error) {
        //     dispatch({type: "LOGIN_FAILURE", payload: error});
        //     console.log(error)
        // }
        // loginCall({email: email.current.value, password: password.current.value}, dispatch)
        try {
            const res = await axios.post("https://musasocialapi.herokuapp.com/auth/login", {email: email.current.value, password: password.current.value});
            localStorage.setItem("accesstoken", res.data.accesstoken)
            history.push("/")
        } 
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MusaSocial</h3>
                    <span className="loginDesc">Connect with Friends That You Don't Have :)</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={Submit}>
                        <input placeholder="Email" className="loginInput" ref={email} required type="email"/>
                        <input placeholder="Password" className="loginInput" minLength="6" ref={password} required type="password"/>
                        <button className="loginButton" disabled={isFetching}>{isFetching? <CircularProgress color="white"/> : "Login"}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">{isFetching? <CircularProgress color="white"/> : "Create Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
