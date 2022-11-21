import React, { useEffect, useState } from "react";
import "./Timer.css";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [count, setCount] = useState(1)

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  const Add = () => {
    
    if(count<10){
      setCount(count+1)
    }
    if(count>1){
      setSeconds(parseInt(seconds)+count)
    }
    if(seconds<=59){
      setSeconds(parseInt(seconds))
    }
  }

  return (
    <div className="timer">
      <div className="container">
        <div className="timer_box">
          <h1>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <button className="restart" onClick={restart}>
            Restart
          </button>
          <button className="stop" onClick={stop}>
            stop
          </button>
          <button className="Add" onclick={Add}>Add</button>
          <button>Sub</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
