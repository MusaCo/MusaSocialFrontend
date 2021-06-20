import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css"

export default function Conversation({conversation, currentUser}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setuser] = useState(null);
    useEffect(() =>{
        const friendId = conversation.members.find(id => id !== currentUser?._id)
        const getFriend = async () =>{
            try {
                const friend = await axios.get("/users?userId=" + friendId)
                setuser(friend.data)
             } 
             catch (error) {
                 console.log(error)
             }
        }
        getFriend();
    },[currentUser, conversation])
    return (
        <div className="conversation">
            <img src={user?.profilePicture ? PF + user.profilePicture : PF + "nopfp.jpg" } alt="" className="conversationImg" />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
