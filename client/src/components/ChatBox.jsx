function ChatBox() {
  return (
    <div className="chatbox">
      <div className="chat-log">
        <div className="chat-message">
          <div className="avatar"></div>
          <div className="message">HI</div>
        </div>
      </div>
      <div className="chat-gpt-log">
        <div className="chat-gpt-message">
          <div className="gpt-avatar"></div>
          <div className="gpt-message">HI</div>
        </div>
      </div>
      <div className="chat-input-box">
        <textarea
          name="chatbox"
          id=""
          placeholder="Type your message"
          cols="30"
          rows="1"
        ></textarea>
      </div>
    </div>
  );
}
export default ChatBox;
