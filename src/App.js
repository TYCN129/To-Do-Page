import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState("");

  const options = {
    method: 'GET',
    url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
    params: {token: 'ipworld.info'},
    headers: {
      'X-RapidAPI-Key': '7e745b8494msh8a5a6dabc60009bp1263f8jsnbcd833ae56af',
      'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
  };

  const fetchQuote = async () => {
    await axios.request(options).then((res) => {
      setQuote(res.data.text);
    })
  }

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
