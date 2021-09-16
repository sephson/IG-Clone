import React from "react";
import "./post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import profilepic from "../../images/picture1.jpg";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";

const post = () => {
  return (
    <div className="post">
      <div className="post-wrap">
        <div className="post-top">
          <div className="image-username">
            <img className="profile-image" src={profilepic} alt="profile pic" />
            <p className="username">ayodine</p>
          </div>
          <MoreHorizIcon className="kebab" />
        </div>
        <img className="post-image" src={profilepic} alt="post-pic" />
        <div className="post-interaction padding">
          <div className="left-cons">
            <FavoriteBorderIcon />
            <ChatBubbleOutlineOutlinedIcon />
            <SendOutlinedIcon />
          </div>
          <div className="save">
            <BookmarkBorderOutlinedIcon />
          </div>
        </div>
        <div className="post-numbers padding ">50 likes</div>
        <div className="post-description padding ">
          Disgruntled guest refuses to spray money, pockets spoon and plate
          because he wasn’t served food at a wedding in Ughelli, Delta State
        </div>
        <div className="post-comments padding color-grey">
          view all 100 comments
        </div>
        <div className="post-time padding color-grey">5 DAYS AGO</div>
        <div className="comment-emoticon">
          <input
            className="add-comment padding"
            placeholder={`Add a comment...`}
          ></input>
        </div>
      </div>
      <div className="post-wrap">
        <div className="post-top">
          <div className="image-username">
            <img className="profile-image" src={profilepic} alt="profile pic" />
            <p className="username">ayodine</p>
          </div>
          <MoreHorizIcon className="kebab" />
        </div>
        <img className="post-image" src={profilepic} alt="post-pic" />
        <div className="post-interaction padding">
          <div className="left-cons">
            <FavoriteBorderIcon />
            <ChatBubbleOutlineOutlinedIcon />
            <SendOutlinedIcon />
          </div>
          <div className="save">
            <BookmarkBorderOutlinedIcon />
          </div>
        </div>
        <div className="post-numbers padding ">50 likes</div>
        <div className="post-description padding ">
          Disgruntled guest refuses to spray money, pockets spoon and plate
          because he wasn’t served food at a wedding in Ughelli, Delta State
        </div>
        <div className="post-comments padding color-grey">
          view all 100 comments
        </div>
        <div className="post-time padding color-grey">5 DAYS AGO</div>
        <div className="comment-emoticon">
          <input
            className="add-comment padding"
            placeholder={`Add a comment...`}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default post;
