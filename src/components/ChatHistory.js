
import React from "react";
import ReactMarkdown from "react-markdown";
 // Import CSS

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="chat-history">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`chat-message ${message.type === "user" ? "user-message" : "bot-message"}`}
        >
         
          {message.type === "bot" && (
            <img
              src="/robot.png" // Replace with your robot image path
              alt="Robot"
              className="robot-icon"
            />
          )}

          <ReactMarkdown>{message.message}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
