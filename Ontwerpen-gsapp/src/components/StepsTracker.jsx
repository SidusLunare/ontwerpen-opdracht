import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const StepsTracker = () => {
  const [steps, setSteps] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    gsap.fromTo('#stepsCounter', {
      textContent: 0
    }, {
      scrollTrigger: {
        trigger: '#stepsCounter',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      duration: 2,
      textContent: steps,
      snap: { textContent: 1 },
      ease: 'power1.inOut'
    });
  }, []);

  useEffect(() => {
    gsap.to('#stepsCounter', {
      textContent: steps,
      duration: 1,
      snap: { textContent: 1 },
      ease: 'power1.inOut'
    });
  }, [steps]);

  const handleInputChange = (e) => {
    setInputValue(parseInt(e.target.value, 10));
  };

  const handleAddSteps = () => {
    setSteps(prevSteps => prevSteps + inputValue);
    setInputValue(0);
  };

  return (
    <div className="steps-tracker">
      <h2>Stappenteller</h2>
      <div className="steps-counter" id="stepsCounter">{steps} stappen</div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Stappen toevoegen"
      />
      <button onClick={handleAddSteps}>Toevoegen</button>
    </div>
  );
};

export default StepsTracker;
