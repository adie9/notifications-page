import React from "react";

function Notification() {
    return (
        <div className="notification-container">
            <img src="../assets/images/avatar-mark-webber.webp" alt="mark-webber"></img>
            <p><span className="name"><strong>Mark Webber</strong></span> reacted to you recent post 
            My first tournament today!<br/><span className="time-since">1m ago</span></p>
        </div>
    )
}

export default Notification