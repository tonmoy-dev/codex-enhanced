import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import axios from "axios";

function ChatBox() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [log, setLog] = useState({});
  const [chatlog, setChatlog] = useState([
    {
      user: "me",
      text: "Hi there!",
    },
    {
      user: "gpt",
      text: "gpt here",
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;

    setChatlog([...chatlog, { user: "me", text: `${inputValue}` }]);
    await axios
      .post("http://localhost:5000/", {
        user: "me",
        text: `${inputValue}`,
      })
      .then((response) => {
        setLog(response.data.text);
        // console.log(text);
        setInputValue("");
        // console.log(chatlog);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (isLoading) {
      setChatlog([...chatlog, { user: "gpt", text: `${log}` }]);
      setInputValue("");
    }
    return () => {
      setIsLoading(false);
    };
  }, [isLoading]);

  return (
    <div className="chatbox">
      <div className="chatlogs">
        {chatlog.map((message, index) => {
          return <ChatMessage key={index} message={message} />;
        })}
      </div>
      <div className="chat-input-box">
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message"
            type="text"
          />
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
}
export default ChatBox;
