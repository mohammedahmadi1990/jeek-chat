import React from "react";
import { Avatar } from "./Avatar";
import { IoIosCall } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { FaVideo, FaUsers, FaDatabase } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdOutlineExitToApp } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Avatar />
      <div className="nav-icons">
        <IoIosCall className="icon" size={32} />
        <RiMessage2Line className="icon selected" size={28} />
        <FaVideo className="icon" size={24} />
        <FaUsers className="icon" size={28} />
        <FaDatabase className="icon" size={25} />
        <AiTwotoneSetting className="icon" size={26} />
        <MdOutlineExitToApp className="icon sign-out" size={30} />
      </div>
    </div>
  );
};
