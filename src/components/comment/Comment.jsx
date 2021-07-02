import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./comment.css";

export default function Comment({ comment }) {
    const [commenter, setcommenter] = useState(null)
    console.log(comment)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(() => {
        const getCommenter = async () => {
            try {
                console.log(comment.commenter)
                const commenter = await axios.get(`https://musasocialapi.herokuapp.com/users?userId=${comment.commenter}`)
                console.log(commenter.data)
                setcommenter(commenter.data)
            } catch (error) {
                console.log(error)
            }

        }
        getCommenter();
    }, [comment])
    return (
        <div className="commentWhole">
            <img src={PF + commenter?.profilePicture} className="commentPF" />
            <div className="commentChunk">
                <div className="commentChungoka">
                    <p className="commentName">{commenter?.username}</p>
                    <p className="commentText">{comment.text}</p>
                </div>
            </div>
        </div>
    )
}
