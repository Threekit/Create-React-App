import React from "react";
import "./App.css";
import { usePlayer } from "./Threekit";

function App() {
  const playerRef = usePlayer({
    assetId: "406bd3c3-f3b4-4af9-9b5f-64e69cfbdd3f",
    authToken: process.env.REACT_APP_THREEKIT_AUTH_TOKEN,
    showAR: true,
    showConfigurator: true,
  });

  return (
    <div className="App">
      <div className="App-header">
        <a href="https://www.threekit.com/">
          <img alt="logo" src="https://i.imgur.com/zsXaU2U.png" width="200px" />
        </a>
      </div>
      <div className="App-main">
        <div className="player-el" ref={playerRef} />
      </div>
    </div>
  );
}

export default App;
