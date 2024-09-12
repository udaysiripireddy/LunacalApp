import React, { useState } from "react";
import "./App.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="tab-container">
      <div className="tab-header">
        <div
          className={`tab-item ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </div>
        <div
          className={`tab-item ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experiences
        </div>
        <div
          className={`tab-item ${activeTab === "recommended" ? "active" : ""}`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "about" && (
           <div>
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a great time to reach out to me.</p>
            <p>When I'm not working, I love to play golf and go fishing with my buddies. I'm also a huge fan of the New York Giants and try to catch every game. I'm looking forward to working with you and helping you with your sales needs.</p>
           </div>
        )}
        {activeTab === "experience" && (
            <div>
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a great time to reach out to me.</p>
            <p>When I'm not working, I love to play golf and go fishing with my buddies. I'm also a huge fan of the New York Giants and try to catch every game. I'm looking forward to working with you and helping you with your sales needs.</p>
           </div>
        )}
        {activeTab === "recommended" && (
            <div>
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a great time to reach out to me.</p>
            <p>When I'm not working, I love to play golf and go fishing with my buddies. I'm also a huge fan of the New York Giants and try to catch every game. I'm looking forward to working with you and helping you with your sales needs.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
