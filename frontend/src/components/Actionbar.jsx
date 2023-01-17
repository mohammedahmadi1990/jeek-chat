import React from "react";
// import { Icon } from "semantic-ui-react";
import { AiOutlinePushpin, AiFillStar, AiFillBell } from "react-icons/ai";

export const Actionbar = () => {
  return (
    <div className="actionbarContainer">
      <div className="iconGroup">
        <AiOutlinePushpin className="icon" size={19} />
        <AiFillStar className="icon" size={19} />
        <AiFillBell className="icon" size={19} />
      </div>
    </div>
  );
};
