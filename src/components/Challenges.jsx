// Challenges.js
import React, { useState } from 'react';

function Challenges() {
  const [challenges, setChallenges] = useState([
    { title: '10k Steps Challenge', participants: 20, winner: 'John Doe' },
    { title: '7-Day Yoga Challenge', participants: 15, winner: 'Jane Smith' },
  ]);

  return (
    <div className="challenges">
      <h2>Ongoing Challenges</h2>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index}>
            <h3>{challenge.title}</h3>
            <p>{challenge.participants} participants</p>
            <p><strong>Winner: {challenge.winner}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenges;

