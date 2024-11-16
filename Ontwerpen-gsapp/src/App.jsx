import React from 'react';
import './App.css';
import CalorieTracker from './components/CalorieTracker';
import StepsTracker from './components/StepsTracker';
import HealthTips from './components/HealthTips';

const App = () => {
  return (
    <div className="app-container">
      <CalorieTracker />
      <StepsTracker />
      <HealthTips />
    </div>
  );
};

export default App