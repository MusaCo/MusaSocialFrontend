import { format } from "timeago.js"
import "./message.css"

export default function Message({own, message}) {
    return (
        <div className={own? "message own" : "message"}>
            <div className="messageTop">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU" alt="" className="messageImg" />
                <p className="messageText"> {message?.text}</p>
            </div>
            <div className="messageBottom">
                {format(message?.createdAt)}
            </div>
        </div>
    )
}
