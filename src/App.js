import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const apiData = await axios.get("https://catfact.ninja/fact");
    setQuote(apiData.data.fact);
    console.log(quote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <Main quote={quote} />
    </div>
  );
}

export default App;
