import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleGetResponse = async () => {
    try {
      const res = await fetch("http://localhost:4000/chat/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.text();
      setResponse(marked(data));
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <>
      <input type="text" onChange={handleMessageChange} value={message} />
      <button onClick={handleGetResponse}>Send</button>
      <div dangerouslySetInnerHTML={{ __html: response }} />
    </>
  );
}

export default App;
