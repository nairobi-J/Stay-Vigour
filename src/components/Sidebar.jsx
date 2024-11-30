// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Stay Vigor</h2>
      <nav>
      <p>
      <Link to="/feed">Feed</Link>
      </p>
        
         <p><Link to="/chat">Chat</Link></p> 
          <p><Link to="/challenges">Challenges</Link></p>
        
      </nav>
    </div>
  );
}

export default Sidebar;
