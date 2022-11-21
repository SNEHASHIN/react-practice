import React from "react";
import { useState } from "react";
import "./Notion.css"

export function Notion() {
    const[popup,setPop]=useState(false);
    const handleClickOpen=()=>{
        setPop(!popup)
    }
  return (
    <div className="container">
      <button className="btn1" onClick={handleClickOpen}>Share</button>
      <div>
        {popup?
        <div className="main">
  <div className="popup">
    <input type="text" placeholder="Add emails or people" className="emails"/>
    <button className="btn2">Invite</button>
  </div>
        </div>:""}
      </div>
    </div>
  );
}
