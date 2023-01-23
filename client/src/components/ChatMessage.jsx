function ChatMessage({ message }) {
  return (
    <div className="chat-log">
      <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
        <div className="avatar"></div>
        <div className={`message ${message.user === "gpt" && "chatgpt"}`}>
          {message.text}
        </div>
      </div>
    </div>
  );
}
export default ChatMessage;
