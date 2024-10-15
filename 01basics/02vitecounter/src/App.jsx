import { useState } from "react";

import "./App.css";

function App() {
  //let counter = 15;

  //hooks using
  let [counter, setcounter] = useState(15);
  //setcounter=>is a refrence holder
  //counter is a that value  or new value will be store in that

  //here im taking arrow function
  const addvlaue = () => {
    console.log("cicked ", counter);
    counter = counter + 1;
    setcounter(counter);
  };

  // const removevalue = () => {
  //   console.log("cicked ", counter);
  //   counter = counter - 1;
  //   setcounter(counter);
  // };

  // value not goes to - or zero

  //here we are using call back function for remove value

  // const removevalue = () => {
  //   console.log("cicked ", counter);

  //   if (counter > 0) {
  //     setcounter(counter - 1);
  //   } else {
  //     console.log("cant set value be 0");
  //   }
  // };

  //here im taking normal function below code

  function removevalue() {
    console.log("cicked ", counter);

    if (counter > 0) {
      setcounter(counter - 1);
    } else {
      console.log("cant set value be 0");
    }
  }

  return (
    <>
      <h1>chai Aur mahii </h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addvlaue}>Add Value={counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value={counter}</button>
    </>
  );
}

export default App;
