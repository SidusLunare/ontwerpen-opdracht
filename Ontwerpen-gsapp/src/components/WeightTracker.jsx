import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import '../App.css';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const WeightTracker = () => {
  const [weightData, setWeightData] = useState([80, 79, 78, 77, 76]);
  const [currentWeight, setCurrentWeight] = useState(weightData[weightData.length - 1]);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(parseFloat(e.target.value) || 0);
  };

  const handleAddWeight = () => {
    setWeightData(prevData => [...prevData, inputValue]);
    setCurrentWeight(inputValue);
    setInputValue(0);
  };

  const handleResetWeight = () => {
    setWeightData(prevData => prevData.length > 1 ? prevData.slice(0, -1) : prevData);
    if (weightData.length > 1) {
      setCurrentWeight(weightData[weightData.length - 2]);
    }
  };

  const chartData = {
    labels: Array.from({ length: weightData.length }, (_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: 'Gewicht (kg)',
        data: weightData,
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="weight-tracker">
      <h2>Gewicht Tracker</h2>
      <div className="weight-graph-container">
        <Line data={chartData} options={chartOptions} />
      </div>
      <p>Huidig gewicht: {currentWeight} kg</p>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Gewicht toevoegen (kg)"
      />
      <button onClick={handleAddWeight}>Toevoegen</button>
      <button onClick={handleResetWeight}>Reset Laatste</button>
    </div>
  );
};

export default WeightTracker;
