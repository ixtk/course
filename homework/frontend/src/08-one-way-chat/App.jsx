import "./App.css";
import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";

const OneWayChat = () => {
  const [activeUser, setActiveUser] = useState("Ron");
  const [messages, setMessages] = useState({
    Ron: ["Hi Ron"],
    Hermione: [],
    Harry: ["Hello"],
    Hagrid: [],
  });

  return (
    <div className="container">
      <Sidebar
        users={Object.keys(messages)}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
      <ChatWindow
        activeUser={activeUser}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
};

export default OneWayChat
