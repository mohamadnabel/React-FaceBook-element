import React from "react";
import Mypost from "./components/Post";
import Mybody from "./components/body";
import Mybutton from "./components/MYbutton";
function App() {
  return (
    <div className="App">
      <Mypost>
        {" "}
        <Mybutton />
      </Mypost>{" "}
      <Mybody />
    </div>
  );
}

export default App;
