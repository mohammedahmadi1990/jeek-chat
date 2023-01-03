import React from "react";
// import { Icon } from "semantic-ui-react";
import { AiOutlinePushpin, AiFillStar, AiFillBell } from "react-icons/ai";

export const Actionbar = () => {
  return (
    <div className="actionbarContainer">
      <div className="iconGroup">
        <AiOutlinePushpin size={19} />
        <AiFillStar size={19} />
        <AiFillBell size={19} />
      </div>
    </div>
  );
};
