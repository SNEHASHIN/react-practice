import React, { useState } from "react";
import "./calculator.css"

function Calculator() {
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  function calculator() {
    setResult(eval(result));
  }
  function clearDisplay() {
    setResult("");
  }
  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result} />

      <input
        type="button"
        value="c"
        className="btn btn1"
        onClick={clearDisplay}
      />
      <input type="button" value="+/-" className="btn" onClick={clickHandler} />
      <input type="button" value="%" className="btn" onClick={clickHandler} />
      <input type="button" value="+" className="btn" onClick={clickHandler} />
      <input type="button" value="7" className="btn" onClick={clickHandler} />
      <input type="button" value="8" className="btn" onClick={clickHandler} />
      <input type="button" value="9" className="btn" onClick={clickHandler} />
      <input type="button" value="-" className="btn" onClick={clickHandler} />
      <input type="button" value="4" className="btn" onClick={clickHandler} />
      <input type="button" value="5" className="btn" onClick={clickHandler} />
      <input type="button" value="6" className="btn" onClick={clickHandler} />
      <input type="button" value="*" className="btn" onClick={clickHandler} />
      <input type="button" value="1" className="btn" onClick={clickHandler} />
      <input type="button" value="2" className="btn" onClick={clickHandler} />
      <input type="button" value="3" className="btn" onClick={clickHandler} />
      <input type="button" value="/" className="btn" onClick={clickHandler} />
      <input type="button" value="0" className="btn" onClick={clickHandler} />
      <input type="button" value="." className="btn" onClick={clickHandler} />
      <input type="button" value=")" className="btn" onClick={clickHandler} />
      <input
        type="button"
        value="="
        className="btn btn1"
        onClick={calculator}
      />
    </div>
  );
}
export default Calculator;
