import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="background text-center px-4 w-96">
      <div className="information-block px-12 py-4 text-center rounded-lg font-bold text-white">
        <h1 className="text-xs uppercase tracking-wider text-zinc-700">
          Advice #{advice.id}
        </h1>
        <p className="text-xl py-12">{advice.advice}</p>
      </div>
      <button
        onClick={getAdvice}
        className="uppercase font-bold text-zinc-700 py-2 rounded-lg my-8 w-full bg-amber-200">
        Give me more advice!
      </button>
    </div>
  );
}

export default App;
