import React from "react";
import ProfileImage from "../images/profile_image.png";

export const Avatar = () => {
  return (
    <div className="avatarContainer">
      <img src={ProfileImage} alt="" />
      <span className="status"></span>
    </div>
  );
};
