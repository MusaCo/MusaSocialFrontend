import "./register.css"
import { useRef } from "react"
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) =>{
        e.preventDefault();
        if (passwordAgain.current.value === password.current.value) {
            const user = {
                username: username.current.value,
                password: password.current.value,
                email: email.current.value,
            }
            try {
                await axios.post("/auth/register",user)
                console.log("succefull registeration")
                history.push("/login")
            } catch (error) {
                console.log(error)
            }
            
        } else {
            
            password.current.setCustomValidity("Passwords do not match!")
            console.log("password qwndara")
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MusaSocial</h3>
                    <span className="loginDesc">Connect with Friends That You Dont Have :)</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="UserName"  ref={username} className="loginInput" required/>
                        <input placeholder="Email" type="email" ref={email} className="loginInput" required/>
                        <input placeholder="Password" type="password" minLength="6" ref={password} className="loginInput" required/>
                        <input placeholder="Password Again" type="password" minLength="6" ref={passwordAgain} className="loginInput" required/>
                        <button className="loginButton" type="submit">SignUp</button>
                        <button className="loginRegisterButton">Log Into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
