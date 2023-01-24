import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import axios from "axios";
import { useStore } from "../services/store";

function ChatBox() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [log, setLog] = useState({});
  const textareaRef = useRef(null);
  const { appChatlog, setAppChatlog } = useStore();

  const apiURL = import.meta.env.VITE_SERVER_URL;

  async function handleSubmit(e) {
    e.preventDefault();
    if (textareaRef.current.value.length <= 0) return;

    setInputValue(textareaRef.current.value);
    setAppChatlog([
      ...appChatlog,
      { user: "me", text: `${textareaRef.current.value}` },
    ]);

    const userMessage = {
      user: "me",
      text: `${textareaRef.current.value}`,
    };

    await axios
      .post(`${apiURL}`, userMessage)
      .then((response) => {
        setLog(response.data.text);
        textareaRef.current.value = "";
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (isLoading) {
      setAppChatlog([...appChatlog, { user: "gpt", text: `${log}` }]);
      setInputValue("");
    }
    return () => {
      setIsLoading(false);
    };
  }, [isLoading]);

  const handleInput = (e) => {
    const newLineCount = e.target.value.split("\n").length;
    e.target.rows = newLineCount;
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="chatbox">
      <div className="chatlogs">
        {appChatlog.map((message, index) => {
          return <ChatMessage key={index} message={message} />;
        })}
      </div>
      <div className="chat-input-box">
        <form onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            rows="1"
            cols="auto"
            onInput={handleInput}
          ></textarea>
          <button type="submit">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              strokeWidth="1.5"
              stroke="#343541"
            >
              <path
                fill="#ddd"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
export default ChatBox;
