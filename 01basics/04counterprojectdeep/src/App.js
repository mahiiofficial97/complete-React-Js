import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);

  function addvalue() {
    //counter = counter + 1;
    //setcounter(counter+1);
    setcounter((priviouscounter) => priviouscounter + 1);
    setcounter((priviouscounter) => priviouscounter + 1);
    setcounter((priviouscounter) => priviouscounter + 1);
    setcounter((priviouscounter) => priviouscounter + 1);
    //setcounter(counter + 1);
    setcounter((priviouscounter) => priviouscounter + 1);
  }
  const removevalue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setcounter(counter);
    }
  };

  return (
    <>
      <h1>chai Aur Mahii</h1>
      <h1> counter value {counter}</h1>

      <button onClick={addvalue}>AddValue {counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
    </>
  );
}

export default App;
