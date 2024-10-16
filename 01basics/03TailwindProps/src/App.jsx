import { useState } from "react";
import "./index.css";
import "./App.css";
import Card from "./copmonent/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 rounded-xl text-black p-6 m-5">
        TailWind test
      </h1>
      <Card username="Mahii" btnText="Click Me" />
      <Card username="Mahesh" btnText="Bounce On click" />
      <Card username="suja" btnText="Send Me" />
      <Card />
    </>
  );
}

export default App;
