 import "./Bouncing.css";
import React, { useState } from "react";
import { useEffect } from "react";

export function Bouncing() {
  const classnamearr = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      index === 3 ? setIndex(0) : setIndex((index) => index + 1);
      console.log(index);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
    <h1>*BallBouncing*</h1>
      <div className="mainDiv">
        <div className={`Box ${classnamearr[index]}`}></div>
      </div>
    </>
  );
}

