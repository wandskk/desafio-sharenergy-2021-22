import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideMenu from './Components/SideManu/SideMenu';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Customers from './Pages/Customers/Customers';

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="container">
          <div
            className="row"
            style={{ minHeight: window.innerHeight - 83 + 'px' }}
          >
            <div className="col-2 sidemenu">
              <SideMenu />
            </div>
            <div className="col-10 content">
              <Routes>
                <div className="">
                  <Route path="/" element={<Home />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/customers/:edit/*" element={<Customers />} />
                </div>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <div className="row">
        <div className="col" style={{ padding: '0' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
