import React from "react";

function Notification({picture, name, action, isRead, time}) {
    
    return (
        <div className="notification-container">
            <img src={picture} alt="user-img"></img>
            <p>
                <span className="name"><strong>{name}</strong></span> 
                <span className="action"> {action}</span>
                <span className="dot"></span><br/>
                <span className="time-since">{time}</span></p>
        </div>
    )
}

export default Notification