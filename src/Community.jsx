// Community.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar
import Feed from './components/Feed';
import Chat from './components/Chat';
import Challenges from './components/Challenges';
import {  Link } from 'react-router-dom';
function Community() {
  return (
    <div className="community-container">
        <Sidebar /> {/* Sidebar on the left */}
        <div className="content">
      
        </div>
      </div>
    
  );
}

export default Community;
