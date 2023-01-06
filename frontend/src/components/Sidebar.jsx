import React from "react";
import { Contacts } from "./Contacts";
import { Input } from "semantic-ui-react";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Messages</div>
      <div className="sidebar-search">
        <Input size="2x" icon="search" placeholder="Search..." />
      </div>
      <Contacts />
      <div className="copyright">Jeek Messenger 2023</div>
    </div>
  );
};
