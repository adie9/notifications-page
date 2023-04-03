import React from "react";


function Notification({avatar, name, action, post, group, message, picture, isRead, setIsRead, isUnread, setIsUnread, time}) {

    return (
        <div className={`notification-container ${isUnread && "unread"}`}>
            <img src={avatar} alt="user-img"></img>
            <div className="noti-content">
                <span className="name"><strong>{name}</strong></span> 
                <span className="action"> {action}</span>
                {post ? <strong className="post">{post}</strong> : undefined}
                {group ? <strong className="group">{group}</strong> : undefined}
                <span className={isUnread && "dot"}></span><br/>
                <span className="time-since">{time}</span>
                {message ? <p className="message">{message}</p> : undefined}
            </div>
            
            {picture ? <img className="noti-image" src={picture} alt="chess"></img> : undefined}
        </div>
        
    )
}

export default Notification