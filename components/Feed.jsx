import React, {useState} from "react";
import Notification from "../components/Notification"



function Feed({isRead, setIsRead}) {
    

    
    return (
        <section className="feed-container">
            <Notification 
                avatar="/images/avatar-mark-webber.webp"
                name="Mark Webber"
                action="reacted to your recent post "
                post="My first tournament today!"
                isRead={!isRead}
                setIsRead={setIsRead}
                time="1m ago"
            />
            <Notification 
                avatar="/images/avatar-angela-gray.webp"
                name="Angela Gray"
                action="followed you"
                isRead={!isRead}
                setIsRead={setIsRead}
                time="5m ago"
            />
            <Notification 
                avatar="/images/avatar-jacob-thompson.webp"
                name="Jacob Thompson"
                action="has joined your group "
                group="Chess Club"
                isRead={!isRead}
                setIsRead={setIsRead}
                time="5 days ago"
            />
            <Notification
                avatar="/images/avatar-rizky-hasanuddin.webp"
                name="Rizky Hasanuddin"
                action="sent you a private message"
                message="Hello, thanks for setting up the Chess Club. I've been
                        a member for a few weeks now and I'm already having lots
                        of fun and improving my game."
                isRead={isRead}
                setIsRead={setIsRead}
                time="5 days ago"
            />
            <Notification
                avatar="/images/avatar-kimberly-smith.webp"
                name="Kimberly Smith"
                action="commented on your picture"
                picture="/images/image-chess.webp"
                isRead={isRead}
                setIsRead={setIsRead}
                time="1 week ago"
            />
            <Notification
                avatar="/images/avatar-nathan-peterson.webp"
                name="Nathan Peterson"
                action="reacted to you recent post "
                post="5 end-game strategies to increase your winrate"
                isRead={isRead}
                time="2 weeks ago"
            />
            <Notification
                avatar="/images/avatar-anna-kim.webp"
                name="Anna Kim"
                action="left the group "
                group="Chess Club"
                isRead={isRead}
                setIsRead={setIsRead}
                time="2 weeks ago"
            />
        </section>
    )
}

export default Feed