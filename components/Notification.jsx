import React, { forwardRef } from "react";
import { useImperativeHandle } from "react";
import Header from "./Header";

function Notification({avatar, name, action, post, group, message, picture, isRead, setIsRead, time}) {
    
    function setAllTrue() {
        if (!isRead) {
            setIsRead(true);
        }
    }

    return (
        <div className={`notification-container ${!isRead && "unread"}`}>
            <img src={avatar} alt="user-img"></img>
            <div className="noti-content">
                <span className="name"><strong>{name}</strong></span> 
                <span className="action"> {action}</span>
                {post ? <strong className="post">{post}</strong> : undefined}
                {group ? <strong className="group">{group}</strong> : undefined}
                {message ? <p className="message">{message}</p> : undefined}
                <span className={!isRead && "dot"}></span><br/>
                <span className="time-since">{time}</span>
            </div>
            {picture ? <img className="noti-image" src={picture} alt="chess"></img> : undefined}
        </div>
        
    )
}

export default Notification