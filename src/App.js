import React from "react";
import "./App.css";
import { usePlayer } from "./Threekit";

const assetId = "7479a7f6-bae4-4d3a-94c7-5df6f6e04dae";
const authToken = process.env.REACT_APP_THREEKIT_AUTH_TOKEN;

function App() {
  const playerRef = usePlayer({ assetId, authToken });

  return (
    <div className="App">
      <div className="player-el" ref={playerRef} />
    </div>
  );
}

export default App;
