import React, { useState } from "react";
import iglogo from "../../images/instagram.png";
import smallprofile from "../../images/picture1.jpg";
import "./navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SendIcon from "@material-ui/icons/Send";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import ProfileDrop from "../../components/profiledrop/profiledrop";

const Navbar = () => {
  const [profileDrop, setProfileDrop] = useState(false);

  // const handleClick = () => {
  //   setClick(!click);
  // };

  return (
    <>
      <nav className="navbarItems">
        <img className="navbarLogo" alt="instagram-logo" src={iglogo} />
        <input className="search disappear" placeholder="Search" />
        <div className="last-side-icons">
          <HomeIcon className="disappear" />
          <AddBoxOutlinedIcon className="disappear" />
          <SendOutlinedIcon />
          <ExploreOutlinedIcon className="disappear" />
          <FavoriteBorderIcon className="disappear" />
          <img
            className="small-profile-picture disappear"
            src={smallprofile}
            alt="profilepic"
            onClick={() => setProfileDrop(!profileDrop)}
          />
        </div>
        <div
          className={
            profileDrop ? "view-profile-drop" : "non-view-profile-drop"
          }
        >
          <ProfileDrop />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
