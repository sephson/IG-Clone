import React from "react";
import "./profiledrop.css";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

const profiledrop = () => {
  return (
    <ul className="profile-drop">
      <li className="icon-and-text">
        <AccountCircleIcon /> Profile
      </li>
      <li className="icon-and-text">
        <BookmarkBorderOutlinedIcon /> Saved
      </li>
      <li className="icon-and-text">
        <SettingsOutlinedIcon /> Settings
      </li>
      <li className="icon-and-text">Log Out</li>
    </ul>
  );
};

export default profiledrop;
