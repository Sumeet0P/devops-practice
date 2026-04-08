// frontend/src/App.js
import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api`)
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>Frontend 🚀</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;