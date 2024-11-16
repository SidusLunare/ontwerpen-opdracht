import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const CalorieTracker = () => {
  const [calories, setCalories] = useState(1950);
  const [inputValue, setInputValue] = useState(0);
  const [goalReached, setGoalReached] = useState(false);
  const circleRadius = 45; // Nieuwe straal waarde
  const circumference = 2 * Math.PI * circleRadius;

  useEffect(() => {
    if (!goalReached) {
      gsap.to('#calorieProgressFill', {
        scrollTrigger: {
          trigger: '#calorieProgress',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        strokeDashoffset: (1 - calories / 1950) * circumference,
        duration: 1.5,
        ease: 'power1.inOut'
      });
    } else {
      gsap.to('#calorieProgress', {
        scale: 1,
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.fromTo('.check-mark', { scale: 0 }, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
        }
      });
    }
  }, [goalReached, calories]);

  const handleInputChange = (e) => {
    setInputValue(parseInt(e.target.value, 10) || 0);
  };

  const handleAddCalories = () => {
    setCalories(prevCalories => {
      const newCalories = Math.max(prevCalories - inputValue, 0);
      if (newCalories === 0) {
        setGoalReached(true);
      }
      return newCalories;
    });
    setInputValue(0);
  };

  return (
    <div className="calorie-tracker">
      <h2>Calorie Tracker</h2>
      <div className="progress-circle" id="calorieProgress">
        {goalReached ? (
                  <div className="check-mark">&#10003;</div>
        ) : (
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={circleRadius}
              fill="none"
              stroke="#4caf50"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={(1 - calories / 1950) * circumference}
              id="calorieProgressFill"
            />
          </svg>
        )}
      </div>
      <p>{calories} kcal left</p>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Calorieën toevoegen"
        disabled={goalReached}
      />
      <button onClick={handleAddCalories} disabled={goalReached}>Toevoegen</button>
    </div>
  );
};

export default CalorieTracker;