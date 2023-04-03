import React, {useState} from "react";
import Notification from "../components/Notification"

function Feed() {
    const [isRead, setIsRead] = useState(true);

    
    return (
        <section className="feed-container">
            <Notification 
                picture="../assets/images/avatar-mark-webber.webp"
                name="Mark Webber"
                action="reacted to your recent post My first tournament today!"
                isRead={!isRead}
                time="1m ago"
            />
            <Notification 
                picture="../assets/images/avatar-angela-gray.webp"
                name="Angela Gray"
                action="followed you"
                isRead={!isRead}
                time="5m ago"
            />
            <Notification 
                picture="../assets/images/avatar-jacob-thompson.webp"
                name="Jacob Thompson"
                action="has joined your group Chess Club"
                isRead={!isRead}
                time="5 days ago"
            />
            <Notification
                picture="../assets/images/avatar-rizky-hasanuddin.webp"
                name="Rizky Hasanuddin"
                action="sent you a private message"
                isRead={isRead}
                time="5 days ago"
            />
            <Notification
                picture="../assets/images/avatar-kimberly-smith.webp"
                name="Kimberly Smith"
                action="commented on your picture"
                isRead={isRead}
                time="1 week ago"
            />
            <Notification
                picture="../assets/images/avatar-nathan-peterson.webp"
                name="Nathan Peterson"
                action="reacted to you recent post 5 end-game strategies to increase your winrate"
                isRead={isRead}
                time="2 weeks ago"
            />
            <Notification
                picture="../assets/images/avatar-anna-kim.webp"
                name="Anna Kim"
                action="left the group Chess Club"
                isRead={isRead}
                time="2 weeks ago"
            />
        </section>
    )
}

export default Feed