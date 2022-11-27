import React from "react";
import "./navbar.scss"
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wraper">
          <div className="search">
            <input type="text" placeholder="search" />
            <SearchIcon />
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icons" />
              English
            </div>
            <div className="item">
              <DarkModeIcon className="icons" />
            </div>
            <div className="item">
              <FullscreenExitIcon className="icons" />
            </div>
            <div className="item">
              <ChatBubbleIcon className="icons" />
            </div>
            <div className="item">
              <ListIcon className="icons" />
            </div>
            <div className="item">
              <img
                src="https://www.picng.com/upload/mario/png_mario_75809.png "
                alt="img"
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default Navbar;
