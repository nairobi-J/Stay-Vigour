import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Progress.css'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Progress() {
  // Sample data for weight changes over time
  const [weightData, setWeightData] = useState([
    { date: '2024-11-01', weight: 70 },
    { date: '2024-11-10', weight: 69 },
    { date: '2024-11-15', weight: 68 },
    { date: '2024-11-20', weight: 67 },
    { date: '2024-11-25', weight: 66 },
  ]);

  // Prepare data for Chart.js
  const chartData = {
    labels: weightData.map((entry) => entry.date), // x-axis labels (dates)
    datasets: [
      {
        label: 'Weight Progress',
        data: weightData.map((entry) => entry.weight), // y-axis data (weights)
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="progress-dashboard">
      <h2>Your Progress</h2>
      
      <div className="chart-container">
        <h3>Weight Progress</h3>
        <Line data={chartData} />
      </div>

      <div className="progress-summary">
        <h3>Progress Summary</h3>
        <ul>
          <li>Weight loss: 4 kg</li>
          <li>Workouts completed this week: 4/5</li>
          <li>Calories consumed: 1500 kcal/day (on average)</li>
        </ul>
      </div>

      <div className="reminder-settings">
        <h3>Set Reminders</h3>
        <form>
          <label>
            Workout reminder:
            <input type="time" />
          </label>
          <button type="submit">Set Reminder</button>
        </form>
      </div>
    </div>
  );
}

export default Progress;
