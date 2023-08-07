import { useState } from "react";
import "./App.css";
import { SendDataWithCustomID, SendToFirebase } from "./firebase/functions";
import GetData from "./components/GetData";

function App() {
  return (
    <div className="App p-5">
      <h2>Firebase CURD Operation</h2>
      <GetData />
    </div>
  );
}

export default App;
