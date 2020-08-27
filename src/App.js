import React from "react";
import "./App.css";
import { usePlayer } from "./Threekit";

const assetId = "f2b754ae-2d55-4cb2-91f9-c83b966970c8";
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
