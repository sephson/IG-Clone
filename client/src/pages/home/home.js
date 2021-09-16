import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Post from "../../components/post/post";
import Bottom from "../../components/bottom/bottom";


const home = () => {
  return (
    <div>
      <Navbar />
      <Post />
      <Bottom />
    </div>
  );
};

export default home;
