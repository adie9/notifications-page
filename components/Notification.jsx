import React from "react";

function Notification({picture, name, action, post, group, message, isRead, time}) {

    return (
        <div className={`notification-container ${!isRead && "unread"}`}>
            <img src={picture} alt="user-img"></img>
            <p>
                <span className="name"><strong>{name}</strong></span> 
                <span className="action"> {action}</span>
                {post ? <strong className="post">{post}</strong> : ""}
                {group ? <strong className="group">{group}</strong> : ""}
                {message ? <p className="message">{message}</p> : ""}
                <span className={!isRead && "dot"}></span><br/>
                <span className="time-since">{time}</span></p>
        </div>
    )
}

export default Notification