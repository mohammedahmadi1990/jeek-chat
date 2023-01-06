import React from "react";
import ProfileImageReceiver from "../images/profile_image_receiver.png";
import ProfileImage1 from "../images/profile_image1.png";
import ProfileImage2 from "../images/profile_image2.png";
import ProfileImage3 from "../images/profile_image3.png";
import ProfileImage4 from "../images/profile_image4.png";

export const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <img src={ProfileImage1} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Bill Gianni</div>
            <div className="contact-recent-time">12m</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status online"></span>
            <div className="contact-final-message">
              yeah dont forget to bring your books to study ...
            </div>
            <span className="recent-message-count new">3</span>
          </div>
        </div>
      </div>
      <div className="contact selected">
        <img src={ProfileImageReceiver} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Selena Baltmer</div>
            <div className="contact-recent-time">4h</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status offline"></span>
            <div className="contact-final-message">see you then.</div>
          </div>
        </div>
      </div>
      <div className="contact">
        <img src={ProfileImage2} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Karen Medvedov</div>
            <div className="contact-recent-time">2d</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status online"></span>
            <div className="contact-final-message">
              It is time for the new trip to the Yalova since
            </div>
            <span className="recent-message-count silent">1</span>
          </div>
        </div>
      </div>
      <div className="contact">
        <img src={ProfileImage4} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Zahra Rahi</div>
            <div className="contact-recent-time">2d</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status away"></span>
            <div className="contact-final-message">
              lets meet in the evening in the cafe
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <img src={ProfileImage3} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Senni Kamara</div>
            <div className="contact-recent-time">7d</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status offline"></span>
            <div className="contact-final-message">
              {" "}
              Bye. see you at the meeting
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <img src={ProfileImage2} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Saman Samsami</div>
            <div className="contact-recent-time">20d</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status offline"></span>
            <div className="contact-final-message">
              {" "}
              Bye. see you at the meeting
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <img src={ProfileImage3} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Dariush Iwonov</div>
            <div className="contact-recent-time">1m</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status offline"></span>
            <div className="contact-final-message">
              {" "}
              Bye. see you at the meeting
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <img src={ProfileImage1} alt="" className="profile-photo" />
        <div className="data-wrapper">
          <div className="title-wrapper">
            <div className="contact-title">Abhishek Irvin</div>
            <div className="contact-recent-time">7m</div>
          </div>
          <div className="message-wrapper">
            <span className="contact-status offline"></span>
            <div className="contact-final-message">
              {" "}
              Bye. see you at the meeting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
