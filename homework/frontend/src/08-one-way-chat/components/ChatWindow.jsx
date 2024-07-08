import { useState } from "react";

const ChatWindow = ({ activeUser, setMessages, messages }) => {
  const [msg, setMsg] = useState("");

  const messageList = messages[activeUser].map((message, index) => {
    return (
      <div className="message" key={index}>
        {message}
      </div>
    );
  });

  const sendMessage = (event) => {
    event.preventDefault()
    setMessages({
      ...messages,
      [activeUser]: [...messages[activeUser], msg],
    });
    setMsg("");
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages[activeUser].length === 0 ? (
          <h1>No messages yet</h1>
        ) : (
          messageList
        )}
      </div>
      <form className="input-container">
        <input
          type="text"
          placeholder={`Send a message to ${activeUser}...`}
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
        />
        <button onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
