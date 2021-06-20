import axios from "axios"
import { useEffect, useState } from "react";
import "./chatonline.css"

export default function ChatOnline({onlineusers, currentId, setcurrentChat}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setfriends] = useState(null)
    const [onlineFriends, setonlineFriends] = useState([])
    useEffect(() => {
        const getFriends = async () =>{
            try {
                const res = await axios.get("/users/friends/" + currentId)
                setfriends(res.data)
            } 
            catch (error) {
                console.log(error)
            }
        }
        getFriends();
        
    }, [currentId])

    const handleClick = async (userr) => {
        try {
            const res = await axios.get(`/conversations/find/${currentId}/${userr._id}`)
            console.log(res)
            setcurrentChat(res.data)
        } 
        catch (error) {
           console.log(error) 
        }
    }
    
    useEffect(() => {
        setonlineFriends([]);
        for (let index = 0; index < onlineusers?.length; index++) {
            for (let i = 0; i < friends?.length; i++) {
                if (onlineusers[index] === friends[i]._id) {
                    setonlineFriends([...onlineFriends, friends[i]])
                }
            }
        }
    }, [friends, onlineusers])



    return (
        <div className="chatOnline">
            {onlineFriends?.map((use) => (
                <div className="chatOnlineFriend" onClick={() => handleClick(use)}>
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src={PF + use?.profilePicture} alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{use?.username}</span>
            </div>
            ))}
        </div>
    )
}
