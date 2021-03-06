import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { useEffect, useState, useContext} from "react"
import  axios  from "axios";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
    const [user, setUser] = useState()
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const params = useParams().username;
    const [isLoggedin, setisLoggedin] = useState(true)
    //const{dispatch} = useContext(AuthContext);
    
    
    useEffect(() => {
        const checkifLoggedin = async () =>{
            try {
                const accesstoken = localStorage.getItem("accesstoken")
                const res = await axios.get("https://musasocialapi.herokuapp.com/auth/login", {
                    headers: {
                        authorization: "Bearer " + accesstoken
                    }
                });
                if (res.data.Loggedin === true) {
                    setisLoggedin(true)
                    //setUser(res.data.message.user)
                }
                else{
                    setisLoggedin(false);
                }
            } 
            catch (error) {
                setisLoggedin(false);
             }
            }
        checkifLoggedin();
        
    }, [])

    

    useEffect(() => {
        if (isLoggedin) {
            const fetchUser = async () =>{
                const result = await axios.get(`https://musasocialapi.herokuapp.com/users?username=${params}`);
                setUser(result.data)
            };
            fetchUser();
        }
    }, [params])

    if (!isLoggedin) {
        return  <Redirect to="/login" />
    }

    if (user) {
        return(
            <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={user.coverPicture? PF + user.coverPicture : PF + "nopfp.jpg"} alt="" className="profileCoverImg" />
                        <img src={user.profilePicture? PF + user.profilePicture : PF + "nopfp.jpg"} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user?.username}</h4>
                        <span className="profileInfoDesc">{user?.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={user?.username}/>
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
        </>
        )
        
    } else {
        return (
                <div className="">
                    <Topbar/>
                    <div className="usernotFoundParent">
                        <h4 className="usernotFound">User Not Found!!</h4>
                    </div>
                </div>
            )
    }
    
}
