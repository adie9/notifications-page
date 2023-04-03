import React from "react"
import "../styles/index.css"
import Header from "../components/Header"
import Feed from "../components/Feed"
import { useState } from "react"

function App() {
  const [isRead, setIsRead] = useState(true);

  
  
  return (
    <div className="App">
      <Header isRead={isRead} setIsRead={setIsRead} />
      <Feed isRead={isRead} setIsRead={setIsRead} />
    </div>
  )
}

export default App
