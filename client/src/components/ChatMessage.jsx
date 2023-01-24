import ChatbotImg from "../assets/images/chatbot.png";
import UserImg from "../assets/images/user.png";

function ChatMessage({ message }) {
  return (
    <div className="chat-log">
      <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
        <div className="avatar">
          <img
            src={message.user === "gpt" ? ChatbotImg : UserImg}
            alt="Ai chatbot"
          />
        </div>
        <div className={`message ${message.user === "gpt" && "chatgpt"}`}>
          {message.text}
        </div>
      </div>
    </div>
  );
}
export default ChatMessage;
