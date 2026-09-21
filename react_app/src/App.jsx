import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1>React app</h1>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <h2>Embedded Streamlit app</h2>
      <iframe
        src="http://localhost:8501/?embed=true"
        title="streamlit"
        style={{ width: "100%", height: 600, border: "1px solid #ccc" }}
      />
    </div>
  );
}
