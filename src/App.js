import React from "react";
import Mypost from "./components/Post";
import Mybody from "./components/body";

function App() {
  return (
    <div className="App">
      <center>
        <h2 >group chat channel</h2>
      </center>
      <Mypost />
      <Mybody />
    </div>
  );
}

export default App;
