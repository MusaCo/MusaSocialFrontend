import { Search, Person, Chat, Notifications } from "@material-ui/icons";
//import { AuthContext } from "../../context/AuthContext";
import {useEffect, useState} from "react"
import "./topbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Topbar() {
    //const {user} = useContext(AuthContext)
    const [user, setuser] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const handleLogout = async () =>{
        // const LoggedoutUser = await axios.get("https://musasocialapi.herokuapp.com/auth/logout");
        // if (LoggedoutUser.data.Loggedout === true) {
        //     window.location.reload();
        // }
        localStorage.removeItem("accesstoken")
        window.location.reload();
    }
    useEffect(() => {
        const checkifLoggedin = async () =>{
            // dispatch({type: "LOGIN_START"});
            // try {
            //     const res = await axios.get("https://musasocialapi.herokuapp.com/auth/login");
            //     if (res.data.Loggedin === true) {
                    
            //         dispatch({type: "LOGIN_SUCCESS", payload: res.data.message});
            //         setisLoggedin(true)
            //     }
            //     else{
            //         setisLoggedin(false);
            //     }
            // } 
            // catch (error) {
            //     setisLoggedin(false);
            //     dispatch({type: "LOGIN_FAILURE", payload: error});    
            //  }
            try {
                const accesstoken = localStorage.getItem("accesstoken")
                const res = await axios.get("https://musasocialapi.herokuapp.com/auth/login", {
                    headers: {
                        authorization: "Bearer " + accesstoken
                    }
                });
                if (res.data.Loggedin === true) {
                    setuser(res.data.message.user)
                }
                
            } 
            catch (error) {
                console.log(error)
             }
            }
            
        checkifLoggedin();
        
    }, [])
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">MusaSocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input placeholder="Search for frind, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink" onClick={handleLogout}>Logout</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user?.username}`}>
                    <img src={PF + user?.profilePicture} alt="" className="topbarimg" />
                </Link>
                
            </div>
        </div>
    )
}
