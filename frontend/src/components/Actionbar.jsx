import React from "react";
import { Icon } from "semantic-ui-react";

export const Actionbar = () => {
  return (
    <div className="actionbarContainer">
      <div className="iconGroup">
        <Icon size="6x" name="pin" />
        <Icon size="6x" name="favorite" />
        <Icon size="6x" name="bell" />
      </div>
    </div>
  );
};
