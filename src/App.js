
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Profile from './component/Profile';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
