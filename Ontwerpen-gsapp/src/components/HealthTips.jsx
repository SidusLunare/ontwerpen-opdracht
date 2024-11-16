import React, { useState } from 'react';
import { gsap } from 'gsap';
import '../App.css';

const HealthTips = () => {
  const [tip, setTip] = useState("Drink voldoende water!");
  const tips = [
    "Drink voldoende water!",
    "Neem elke dag een korte wandeling.",
    "Eet voldoende groenten en fruit.",
    "Zorg voor voldoende slaap.",
    "Doe regelmatig aan stretching."
  ];

  const handleNewTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
    gsap.fromTo('#healthTip', { opacity: 0 }, { opacity: 1, duration: 1 });
  };

  return (
    <div className="health-tips">
      <h2>Gezondheidstips</h2>
      <div className="tip" id="healthTip">{tip}</div>
      <button id="newTipButton" onClick={handleNewTip}>Nieuwe Tip</button>
    </div>
  );
};

export default HealthTips;