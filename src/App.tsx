import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(1);

  function handleCount() {
    setCount(count * 2);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => handleCount()}>Aumentar</button>
    </div>
  );
}

export default App;
