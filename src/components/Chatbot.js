<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ChatHistory from './ChatHistory';
import Loading from './Loading';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRobotVisible, setIsRobotVisible] = useState(true);

  const genAI = new GoogleGenerativeAI("AIzaSyC9SemdFGEz1mY6AevqTSrmnl2ju4B7QYc");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === '') return;
    setIsLoading(true);
    setChatHistory(prev => [...prev, { type: 'user', message: userInput }]);

    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;
      const botMessage = response.text();

      setChatHistory(prev => [...prev, { type: 'bot', message: botMessage }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
    setIsOpen(false);
    setIsRobotVisible(true); // Show robot icon again
  };

  const toggleChat = () => {
    setIsOpen(true);
    setIsRobotVisible(false); // Hide robot icon

    // Show initial "Hello" message after 1 second
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        { type: 'bot', message: "Hello there, how may I help you? we are available 24*7" },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    if (chatHistory.length) {
      const chatWindow = document.querySelector('.chat-window');
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <>
      {/* Robot Icon with Assistant Label */}
      {isRobotVisible && (
        <div className="chatbot-wrapper" onClick={toggleChat}>
          <div className="chatbot-btn">
            <img src="/robot.png" alt="Robot" className="robot-icon" />
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container open">
          <button className="close-btn" onClick={clearChat}>X</button>
          <div className="chat-window">
            <ChatHistory chatHistory={chatHistory} />
            {isLoading && <Loading />}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={handleKeyPress}
            />
            <button className="send-button" onClick={sendMessage} disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

=======
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ChatHistory from './ChatHistory';
import Loading from './Loading';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRobotVisible, setIsRobotVisible] = useState(true);

  const genAI = new GoogleGenerativeAI("AIzaSyC9SemdFGEz1mY6AevqTSrmnl2ju4B7QYc");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === '') return;
    setIsLoading(true);
    setChatHistory(prev => [...prev, { type: 'user', message: userInput }]);

    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;
      const botMessage = response.text();

      setChatHistory(prev => [...prev, { type: 'bot', message: botMessage }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
    setIsOpen(false);
    setIsRobotVisible(true); // Show robot icon again
  };

  const toggleChat = () => {
    setIsOpen(true);
    setIsRobotVisible(false); // Hide robot icon

    // Show initial "Hello" message after 1 second
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        { type: 'bot', message: "Hello there, how may I help you? we are available 24*7" },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    if (chatHistory.length) {
      const chatWindow = document.querySelector('.chat-window');
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <>
      {/* Robot Icon with Assistant Label */}
      {isRobotVisible && (
        <div className="chatbot-wrapper" onClick={toggleChat}>
          <div className="chatbot-btn">
            <img src="/robot.png" alt="Robot" className="robot-icon" />
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container open">
          <button className="close-btn" onClick={clearChat}>X</button>
          <div className="chat-window">
            <ChatHistory chatHistory={chatHistory} />
            {isLoading && <Loading />}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={handleKeyPress}
            />
            <button className="send-button" onClick={sendMessage} disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

>>>>>>> b1e18e0 (Added/Updated README.md)
