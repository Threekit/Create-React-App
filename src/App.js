import React from "react";
import "./App.css";
import { usePlayer } from "./Threekit";

function App() {
  const playerRef = usePlayer({
    assetId: "7479a7f6-bae4-4d3a-94c7-5df6f6e04dae",
    authToken: process.env.REACT_APP_THREEKIT_AUTH_TOKEN,
    showAR: true,
  });

  return (
    <div className="App">
      <div className="player-el" ref={playerRef} />
    </div>
  );
}

export default App;
