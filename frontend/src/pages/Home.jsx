import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Chat } from "../components/Chat";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Navbar />
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
