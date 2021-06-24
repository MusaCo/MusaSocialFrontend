import "./post.css"
import { MoreVert } from "@material-ui/icons";
import  axios  from "axios";
import { format } from "timeago.js";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
    const [currentuser, setcurrentuser] = useState(null)
    //const {user:currentuser} = useContext(AuthContext)
    const [user, setUser] = useState({})
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    useEffect(() =>{
        setIsLiked(post.likes.includes(currentuser._id));
    }, [currentuser?._id, post.likes]);
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

    useEffect(() => {
        const fetchUser = async () =>{
            const result = await axios.get(`https://musasocialapi.herokuapp.com/users?userId=${post.userId}`);
            setUser(result.data)
            
        };
        fetchUser();
    }, []);

    const likeHandler = () =>{
        try {
            axios.put("https://musasocialapi.herokuapp.com/post/" + post._id + "/like", {userId: currentuser._id})
            console.log("post liked........")
        } catch (error) {
            console.log(error)
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop"> 
                    <div className="postTopLeft">
                    <Link to={`profile/${user?.username}`}>
                        <img src={ user.profilePicture? PF + user?.profilePicture : PF+"nopfp.png"} alt="" className="postProfileImg" />
                    </Link>
                        <span className="postUsername">{user?.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src=  {PF + "like.png"}  alt="" className="likeIcon" onClick={likeHandler}/>
                        <img src={PF + "heart1.png"} alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
