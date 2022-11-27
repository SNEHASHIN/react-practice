import React from "react";
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar=()=>{
    return (
      <div className="sidebar">
        <div className="Top">
          <span className="logo">admin</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icons" />
              <span>Dashboard</span>
            </li>
            <p className="title">LIST</p>
            <li>
              <AccountCircleOutlinedIcon className="icons" />
              <span>use</span>
            </li>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icons" />
              <span>products</span>
            </li>
            <li>
              <LocalShippingOutlinedIcon className="icons" />
              <span>Delivery</span>
            </li>

            <p className="title">USEFUL</p>
            <li>
              <ViewStreamOutlinedIcon className="icons" />
              <span>orders</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <NotificationsNoneOutlinedIcon className="icons" />
              <span>Notification</span>
            </li>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icons" />
              <span>System health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icons" />
              <span>logs</span>
            </li>
            <p className="title">USER</p>
            <li>
              <SettingsOutlinedIcon className="icons" />
              <span>setting</span>
            </li>
            <li>
              <AccountBoxOutlinedIcon className="icons" />
              <span>Profile</span>
            </li>
            <li>
              <LogoutOutlinedIcon className="icons" />
              <span>logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="color"></div>
          <div className="color"></div>
        </div>
        <sidebar />
      </div>
    );
}

export default Sidebar