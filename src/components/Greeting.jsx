import React, { useState } from "react";
import Async from "./Async";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hola Mundo!</h1>
      {!changedText && <h3>Es bueno verte</h3>}
      {changedText && <h3>Cambio</h3>}
      <button onClick={changeHandler}>Cambiar texto!</button>
    </div>
  );
}

export default Greeting;
