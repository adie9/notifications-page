import React from "react"

function Header() {
    function handleToggle() {
        
    }
    
    return (
        <section className="header-container">
            <h1>Notifications <span className="noti-amount">3</span></h1>
            <a className="mark-read" onClick={handleToggle}>Mark all as read</a>
        </section>
    )
}

export default Header