import { useState } from "react";
import "./App.css";
import { SendDataWithCustomID, SendToFirebase } from "./firebase/functions";
import GetData from "./components/GetData";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App p-5">
      <h2>Firebase CURD Operation</h2>
      {/* <GetData /> */}
      <Todo />
    </div>
  );
}

export default App;
