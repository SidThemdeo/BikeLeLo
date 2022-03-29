import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import UserHome from './components/UserHome';
//import MainMenu from './components/MainMenu';

function App() {
    return (
    <div className='App'>
      <h1>Welcome</h1> <br/>
      <Link to="/login">Login</Link> <br/>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/UserHome" element={<UserHome />} />
      </Routes>
    </div>
    )}

export default App;