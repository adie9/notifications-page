import React from "react"

function Header({isUnread, setIsUnread, notiAmount, setAmount}) {
    function toggle() {
        setIsUnread(!isUnread);
        if (isUnread) {
            setAmount(0);
        } else {
            setAmount(3);
        }
    }

    return (
        <section className="header-container">
            <h1>Notifications <span className="noti-amount">{notiAmount}</span></h1>
            <a className="mark-read" onClick={toggle}>Mark all as read</a>
        </section>
    )
}

export default Header