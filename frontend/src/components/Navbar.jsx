import React from "react";
import { Avatar } from "./Avatar";
import { Icon } from "semantic-ui-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Avatar />
      <Icon size="large" name="call" />
      <Icon className="selected" size="large" name="talk" />
      <Icon size="large" name="video" />
      <Icon size="large" name="users" />
      <Icon size="large" name="database" />
      <Icon size="large" name="setting" />
      <Icon className="sign-out" size="large" name="sign-out" />
    </div>
  );
};
