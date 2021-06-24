import "./feed.css"
import Share from "../share/Share";
import Post from "../post/Post";
import  axios  from "axios";
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

export default function Feed({username, user}) {
    //const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const [posts, SetPosts] = useState([]);
    
    useEffect(() => {
        console.log(user?.username)
        const fetchPosts = async () =>{
            const result = username? await axios.get(`https://musasocialapi.herokuapp.com/post/profile/${username}`) : await axios.get(`https://musasocialapi.herokuapp.com/post/timeline/${user?._id}`)
            SetPosts(result.data.sort((p1, p2) =>{
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        };
        fetchPosts();
    }, [username, user?._id])

    return (
        <div className="feed">
            <div className="feedWrapper">
                {(!username || username === user.username) &&<Share/>}
                {posts.map(p=> (
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    )
}
