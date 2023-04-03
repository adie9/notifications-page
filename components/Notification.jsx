import React from "react";

function Notification({name, time}) {
    
    return (
        <div className="notification-container">
            <img src="../assets/images/avatar-mark-webber.webp" alt="mark-webber"></img>
            <p><span className="name"><strong>{name}</strong></span> reacted to you recent post 
            My first tournament today!<br/><span className="time-since">{time}</span></p>
        </div>
    )
}

export default Notification