import React from 'react';

import Dashboard from './components/Dashboard';
import MyNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <>
      <MyNavbar />
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
