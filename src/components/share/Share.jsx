import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import {useContext, useRef, useState} from "react"
import axios from "axios";

export default function Share() {
    // const {user} = useContext(AuthContext)
    const [user, setuser] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setfile] = useState(null)
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
                    setuser(res.data.message.user)
                }
                
            } 
            catch (error) {
                console.log(error)
             }
        }
        checkifLoggedin();
        
    }, [])
    const submitHandler = async(e) =>{
        e.preventDefault()
        const newPost = {
            userId: user?._id,
            desc: desc.current.value? desc.current.value : " " 
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name
            data.append("name", filename);
            data.append("file", file);
            
            newPost.img = filename;
            try {
                await axios.post("https://musasocialapi.herokuapp.com/upload", data)
            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.post("https://musasocialapi.herokuapp.com/post", newPost)
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src= {PF + user?.profilePicture} alt="" className="shareProfileImg" />
                    <input ref={desc} placeholder={"What's in your mind " + user?.username} className="shareInput" />
                </div>
                <hr className="shareHr" />
                {file &&(
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg"/>
                        <Cancel className="shareImageCancel" onClick={() => {setfile(null)}}/>
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia className="shareIcon" htmlColor="tomato"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input type="file" style={{display: "none"}} accept=".png,.jpg,.jpeg" id="file" onChange={(e)=>{setfile(e.target.files[0])}}/>
                        </label>
                        <div className="shareOption">
                            <Label className="shareIcon" htmlColor="blue"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room className="shareIcon" htmlColor="green"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareIcon" htmlColor="goldenrod"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>            
        </div>
    )
}
