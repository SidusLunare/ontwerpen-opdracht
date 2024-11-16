import React from 'react';
import './App.css';
import CalorieTracker from './components/Calorietracker';
import StepsTracker from './components/StepsTracker';
import HealthTips from './components/HealthTips';
import WeightTracker from './components/WeightTracker';

const App = () => {
  return (
    <div className="app-container">
      <CalorieTracker />
      <StepsTracker />
      <WeightTracker />
      <HealthTips />
    </div>
  );
};

export default App;