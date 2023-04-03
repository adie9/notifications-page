import React, { useRef } from "react"

function Header({isRead,setIsRead}) {
    function toggle() {
        setIsRead(!isRead)
    }

    return (
        <section className="header-container">
            <h1>Notifications <span className="noti-amount">3</span></h1>
            <a className="mark-read" onClick={toggle}>Mark all as read</a>
        </section>
    )
}

export default Header