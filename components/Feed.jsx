import React from "react";
import Notification from "../components/Notification"

function Feed() {
    return (
        <section className="feed-container">
            <Notification 
                name="Mark Webber"
                time="1m ago"
            />
            <Notification 
                name="Angela Gray"
                time="5m ago"
            />
            <Notification 
                name="Jacob Thompson"
                time="5 days ago"
            />
        </section>
    )
}

export default Feed