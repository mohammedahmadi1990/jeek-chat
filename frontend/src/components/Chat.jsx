import React from "react";
import { Actionbar } from "../components/Actionbar";
import { MdSend, MdGTranslate, MdOutlineAttachFile } from "react-icons/md";
import ProfileImageSender from "../images/profile_image_sender.png";
import ProfileImageReceiver from "../images/profile_image_receiver.png";

export const Chat = () => {
  return (
    <div className="chat">
      <Actionbar />
      <div className="open-chat">
        <div className="open-chat-title">Selena Baltmer</div>
        <div className="open-chat-status">
          <div className="open-chat-status-sign away"></div>
          <div className="open-chat-status-message">Active 2 hours ago</div>
        </div>
      </div>
      <ul className="open-chat-body">
        <li className="receiver">
          <img className="receiver-profile" src={ProfileImageReceiver} alt="" />
          <div className="receiver-message-container">
            <div className="receiver-message">
              Hey bro, if you are in Baltimore call me!
            </div>
            <div className="receiver-time">Yesterday 06:19 PM</div>
          </div>
        </li>
        <li className="receiver">
          <img className="receiver-profile" src={ProfileImageReceiver} alt="" />
          <div className="receiver-message-container">
            <div className="receiver-message">
              I am about to buy new car, if you wanna sell yours let me know!
              Waiting for you...
            </div>
            <div className="receiver-time">Yesterday 06:19 PM</div>
          </div>
        </li>
        <li className="sender">
          <div className="sender-message-container">
            <div className="sender-message">
              Hi, I planned to come by tomorow and will let you know.
            </div>
            <div className="sender-time">Yesterday 06:19 PM</div>
          </div>
          <img className="sender-profile" src={ProfileImageSender} alt="" />
        </li>
        <li className="receiver">
          <img className="receiver-profile" src={ProfileImageReceiver} alt="" />
          <div className="receiver-message-container">
            <div className="receiver-message">
              Good morning bro. I am sending you my location and you can reach
              here from the airport via Uber.
            </div>
            <div className="receiver-time">Yesterday 06:19 PM</div>
          </div>
        </li>
        <li className="receiver">
          <img className="receiver-profile" src={ProfileImageReceiver} alt="" />
          <div className="receiver-message-container">
            <div className="receiver-message">Barans St. 234 23th Apt</div>
            <div className="receiver-time">Yesterday 06:19 PM</div>
          </div>
        </li>

        <li className="receiver">
          <img className="receiver-profile" src={ProfileImageReceiver} alt="" />
          <div className="receiver-message-container">
            <div className="receiver-message">
              ok got it. I will call you when the plane lands.
            </div>
            <div className="receiver-time">Yesterday 06:19 PM</div>
          </div>
        </li>
        <li className="sender">
          <div className="sender-message-container">
            <div className="sender-message">I will be there in 15mins</div>
            <div className="sender-time">Yesterday 06:19 PM</div>
          </div>
          <img className="sender-profile" src={ProfileImageSender} alt="" />
        </li>
        <li className="receiver">
          <img className="receiver-profile" src={ProfileImageReceiver} alt="" />
          <div className="receiver-message-container">
            <div className="receiver-message">ok see you</div>
            <div className="receiver-time">Yesterday 06:19 PM</div>
          </div>
        </li>
      </ul>
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
