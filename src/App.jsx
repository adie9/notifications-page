import React from "react"
import "../styles/index.css"
import Header from "../components/Header"
import Feed from "../components/Feed"
import { useState } from "react"

function App() {
  const [isRead, setIsRead] = useState(true);
  const [isUnread, setIsUnread] = useState(true);
  const [notiAmount, setAmount] = useState(3);
  
  
  return (
    <div className="App">
      <Header 
      isRead={isRead} setIsRead={setIsRead} 
      isUnread={isUnread} setIsUnread={setIsUnread}
      notiAmount={notiAmount} setAmount={setAmount} />
      <Feed isRead={isRead} setIsRead={setIsRead} isUnread={isUnread} setIsUnread={setIsUnread} />
    </div>
  )
}

export default App
