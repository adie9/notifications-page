import React from "react"

function Header() {
    return (
        <section className="header-container">
            <h1>Notifications <span className="noti-amount">3</span></h1>
            <a className="mark-read">Mark all as read</a>
        </section>
    )
}

export default Header