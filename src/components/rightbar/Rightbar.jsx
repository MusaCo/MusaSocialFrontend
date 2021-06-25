import "./rightbar.css"
import Online from "../online/Online";
import  axios  from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({user}) {
    const [currentuser, setcurrentuser] = useState(null)
    //const {user:currentuser, dispatch} = useContext(AuthContext)
    const [Friends, setFriends] = useState([])
    

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
                    setcurrentuser(res.data.message.user)
                }
              
            } 
            catch (error) {
                console.log(error)
             }
        }
        checkifLoggedin();
        
    }, [])
    const [followed, setfollowed] = useState(currentuser?.followings?.includes(user?._id))
    useEffect(() => {
        setfollowed(currentuser?.followings?.includes(user?._id));
    }, [currentuser, user?._id])

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                console.log()
                const friends = await axios.get(`https://musasocialapi.herokuapp.com/users/friends/${user?._id}`);
                console.log(friends)
                setFriends(friends.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFriends();
        
    }, [currentuser?._id])
    const handleClick = async () =>{
        try {
            if (followed) {
                await axios.put("https://musasocialapi.herokuapp.com/users/" + user._id + "/unfollow", {userId: currentuser?._id});
                // dispatch({type: "UNFOLLOW", payload: user._id});
            } 
            else if(!followed) {
                await axios.put("https://musasocialapi.herokuapp.com/users/" + user._id + "/follow", {userId: currentuser?._id});
                // dispatch({type: "FOLLOW", payload: user._id});
                
            }
            setfollowed(!followed);
        } 
        catch (error) {
            console.log(error)
        }
        
    }
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const Home = () =>{
        console.log(Friends.length)
        return(
            <>
            <div className="birthdayContainer">
                    <img src="/assets/birthday.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Ahmed Adil</b> and <b>7 other Friendssssss</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/tesla.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Friends.map(p=> (
                        
                        <p>{p.username}</p>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return(
            <>
            {currentuser?.username !== user?.username &&(
                <button className="rightbarFollowButton" onClick={handleClick}>
                    {followed? "Unfollow": "Follow"}
                    {followed? <Remove/>: <Add/>}
                </button>
            )}
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Live:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relationship}</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                {
                    Friends.map((friend) => (
                        <Link to={"/profile/" + friend.username} style={{textDecoration: "none"}}>
                            <div className="rightbarFollowing">
                                <img src={PF + friend.profilePicture} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">{friend?.username}</span>
                            </div>
                        </Link>
                        
                    ))
                }
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <Home/>}
            </div>
        </div>
    )
}
