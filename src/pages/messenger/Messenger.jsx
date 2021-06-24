import './messenger.css'
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/Message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios"
import { io } from "socket.io-client";
import { Redirect } from 'react-router-dom';

export default function Messenger() {
    const [conversations, setconversations] = useState([])
    const [currentChat, setcurrentChat] = useState(null)
    const [newMessage, setnewMessage] = useState(null)
    const [messages, setmessages] = useState(null)
    const [arrivalMessage, setarrivalMessage] = useState(null)
    const [onlineUsers, setonlineUsers] = useState([])
    const Socket = useRef()
    const scrollRef = useRef()
    const [isLoggedin, setisLoggedin] = useState(true)
    // const{user, dispatch} = useContext(AuthContext);
    const [user, setuser] = useState(null)
    
    
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
                    setuser(res.data.message)
                    setisLoggedin(true)
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
            const getConversations = async () =>{
                try {
                    const res = await axios.get("/conversations/" + user?._id)
                    setconversations(res.data)
                }
                catch (error) {
                    console.log(error)
                }
            }
            getConversations();
        }
        
    }, [user?._id])

    useEffect(() => {
        if (isLoggedin) {
            Socket.current = io("ws://localhost:8900");
            Socket.current.on("getMessage", data => {
            setarrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        })
        }
    }, [])
    
    useEffect(() => {
        if (isLoggedin) {
            Socket.current.emit("addUser", user?._id)
            Socket.current.on("getUsers", (users) => {setonlineUsers(user?.followings.filter((f) => users.some((u) => u.userId === f))); console.log(users)})
        }
        
    }, [user])
    
    useEffect(() => {
        if (isLoggedin) {
            arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setmessages((prev) => [...prev, arrivalMessage])
        }
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        if (isLoggedin) {
            const getMessages = async () =>{
                try {
                    const res = await axios.get("/messages/" + currentChat?._id)
                    setmessages(res.data)
                } 
                catch (error) {
                    console.log(error)
                }
            }
            getMessages();
        }
        

    },[currentChat])

   

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const message = {
            sender: user?._id,
            text: newMessage,
            conversationId: currentChat._id
        }
        
        const receiverId = currentChat.members.find(member => member !== user?._id)
        Socket.current.emit("sendMessage", 
        {   
            senderId: user?._id, 
            receiverId: receiverId, 
            text: newMessage
        })
        setnewMessage("");
        try {
            const res = await axios.post("/messages", message)
            setmessages([...messages , res.data])
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    if (!isLoggedin) {
        return <Redirect to="/login" />
    }

    
    return (
        <>
        <Topbar/>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for Friends" className="chatMenuInput" />
                    {
                        conversations.map((c) => (
                            <div className="" onClick={() => setcurrentChat(c)}>
                                <Conversation conversation={c} currentUser={user}/>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat?<><div className="chatBoxTop">
                            
                        {
                            messages.map((m) => (
                                <div ref={scrollRef}>
                                    <Message own={m?.sender === user?._id} message={m} />
                                </div>
                                
                            ))
                        }
                        
                    </div>
                    <div className="chatBoxBottom">
                    <textarea placeholder="Write Something..." className="chatMessageInput" onChange={(e) => setnewMessage(e.target.value)} value={newMessage}></textarea>
                    <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                    </div>
                    </>
                    : <span className="noConversationText">Open a Convo to start Chatting</span>
                    }
                    
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline onlineusers={onlineUsers} currentId={user?._id} setcurrentChat={setcurrentChat}/>
                </div>
            </div>
        </div>
        </>
    )
    
}

