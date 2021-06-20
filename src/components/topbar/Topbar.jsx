import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import {useContext} from "react"
import "./topbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Topbar() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const handleLogout = async () =>{
        const LoggedoutUser = await axios.get("https://musasocialapi.herokuapp.com/auth/logout");
        if (LoggedoutUser.data.Loggedout === true) {
            window.location.reload();
        }
        
        
    }
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
