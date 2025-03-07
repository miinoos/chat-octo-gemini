import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleGetResponse = async () => {
    try {
      const res = await fetch("http://localhost:4000/chat/api");
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <>
      <input type="text" onChange={handleMessageChange} value={message} />
      <button onClick={handleGetResponse}>Send</button>
      <p>{response}</p>
    </>
  );
}

export default App;
