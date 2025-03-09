import ChatbotIcon from "./ChatbotIcon";

const Chatbot = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="log-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">arrow_downward</button>
        </div>
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 🙋‍♂️ <br /> How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey 🙋‍♂️ can you help me with a leagl advice?
            </p>
          </div>
          <div className="chat-footer">
            <form action="#" className="chat-form">
              <input
                type="text"
                placeholder="Write a message.."
                className="message-input"
                required
              />
              <button className="material-symbols-rounded">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
