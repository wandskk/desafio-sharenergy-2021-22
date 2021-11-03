import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideMenu from './Components/SideManu/SideMenu';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Customers from './Pages/Customers/Customers';
import Logo from './Components/Logo/Logo';
import SideMenuMobile from './Components/SideManu/SideMenuMobile';

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="container">
          <div className="row menu-mobile">
            <div className="col-2">
              <SideMenuMobile />
            </div>
            <div className="col-8 logoMobile">
              <Logo />
            </div>
            <div className="col-2"></div>
          </div>
          <div
            className="row"
            style={{ minHeight: window.innerHeight - 83 + 'px' }}
          >
            <div className="col-lg-3 col-md-3 sidemenu">
              <SideMenu />
            </div>
            <div className="col-lg-9 col-md-9 col-sm content">
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
