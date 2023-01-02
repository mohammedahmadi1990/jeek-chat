import React from "react";
import { Actionbar } from "../components/Actionbar";

export const Chat = () => {
  return (
    <div className="chat">
      <Actionbar />
      <input
        className="text-input"
        id="text"
        placeholder="Type your message here ..."
      />
    </div>
  );
};
