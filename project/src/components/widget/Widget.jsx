import React from "react"
import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const widget=({ type })=>{

    let data;

    //temporary
    const amount=100;
    const diff=20;

    switch (type) {
      case "user":
        data = {
          title: "USER",
          isMoney: "false",
          link: "see all",
          icon: (
            <PersonOutlineIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "pink",
              }}
            />
          ),
        };
        break;
      case "order":
        data = {
          title: "ORDER",
          isMoney: "false",
          link: "see all orders",
          icon: (
            <ShoppingCartIcon
              className="icon"
              style={{
                color:"goldenrod",
                backgroundColor: "pink",
              }}
            />
          ),
        };
        break;
      case "earning":
        data = {
          title: "EARNING",
          isMoney: "true",
          link: "view net earning",
          icon: (
            <MonetizationOnIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "pink",
              }}
            />
          ),
        };
        break;
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: "true",
          link: "details",
          icon: (
            <AccountBalanceIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "pink",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }

return (
  <div className="widget">
    <div className="left">
      <span className="title">{data.title}</span>
      <span className="counter">
        {data.isMoney && "$"} {amount}
      </span>
      <span className="link">{data.link}</span>
    </div>
    <div className="right">
      <div className="percentage positive">
        <KeyboardArrowUpIcon />
        {diff}%
      </div>
      {data.icon}
    </div>
  </div>
);
}

export default widget