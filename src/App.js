import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './components/Game';

const minutesToAdd = 1;
const currentTime = new Date().getTime();
const futureTime = new Date(currentTime + minutesToAdd*60000);


function App() {
  const calculateTimeLeft = (difference) => {
    let timeLeft = {
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(futureTime - currentTime);

  useEffect(() => {
    const difference = futureTime - new Date();
    if (difference > 0) {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft(difference));
      }, 1000);
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Game loggedUser={{ username: "James"}} word={"Word"} currentPhase={"Voting"} timeLeft={timeLeft} />
    </div>
  );
}

export default App;