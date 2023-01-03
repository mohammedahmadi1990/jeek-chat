import React from "react";
import { Actionbar } from "../components/Actionbar";
import { MdSend, MdGTranslate, MdOutlineAttachFile } from "react-icons/md";

export const Chat = () => {
  return (
    <div className="chat">
      <Actionbar />
      <div className="contact-details"></div>
      <div className="message-bar">
        <MdOutlineAttachFile className="chat-attach-icon" size={35} />

        <div className="chat-input-text">
          <textarea
            className="text-input"
            id="text"
            placeholder="Type your message here ..."
          />
          <MdSend className="chat-send-icon" size={26} />
        </div>

        <MdGTranslate className="chat-language-icon" size={40} />
      </div>
    </div>
  );
};
