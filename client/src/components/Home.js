import React from "react";

import MainBox from "./MainBox";

import ambulance from "../assets/ambulance.svg";
import injection from "../assets/injection.svg";
import oxygen from "../assets/oxygen.svg";
import beds from "../assets/bed.svg";
import blood from "../assets/blood.svg";
import chat from "../assets/chat.svg";
import food from "../assets/food.svg";
import testing from "../assets/testing.svg";
import medicines from "../assets/medicines.svg";
import "./stylesheets/Home.css";
function Home() {
  return (
    <div className="boxes">
      <MainBox imgSrc={injection} heading="Remdesivir" />
      <MainBox imgSrc={beds} heading="Beds" />
      <MainBox imgSrc={blood} heading="Blood Plasma" />
      <MainBox imgSrc={medicines} heading="Medicines" />
      <MainBox imgSrc={oxygen} heading="Oxygen" />
      <MainBox imgSrc={testing} heading="Testing Centres" />
      <MainBox imgSrc={ambulance} heading="Ambulance" />
      <MainBox imgSrc={food} heading="Food" />
      <MainBox imgSrc={chat} heading="Chatting with people" />
    </div>
  );
}

export default Home;
