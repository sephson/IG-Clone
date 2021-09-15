import React from "react";
import "./bottom.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import HomeIcon from "@material-ui/icons/Home";
import smallprofile from "../../images/picture1.jpg";

const bottom = () => {
  return (
    <div className="bottom mobile">
      <div className="bottom-icons">
        <HomeIcon />
        <AddBoxOutlinedIcon className="bottom-middle-icon " />
        <ExploreOutlinedIcon className="bottom-middle-icon " />
        <FavoriteBorderIcon className="bottom-middle-icon" />
        <img
          className="small-profile-picture bottom-last-icon"
          src={smallprofile}
          alt="profilepic"
        />
      </div>
    </div>
  );
};

export default bottom;
